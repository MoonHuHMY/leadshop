<?php

namespace promoter\api;

use framework\common\BasicController;
use promoter\models\Promoter;
use promoter\models\PromoterLevel;
use yii\helpers\ArrayHelper;

class LevelController extends BasicController
{
    /**
     * 重写父类
     * @return [type] [description]
     */
    public function actions()
    {
        $actions = parent::actions();
        unset($actions['create']);
        unset($actions['update']);
        return $actions;
    }

    public function actionCreate()
    {
        $model = new PromoterLevel();
        $model->attributes = \Yii::$app->request->post();
        $model->AppID = \Yii::$app->params['AppID'];
        $model->merchant_id = 1;
        $model->condition = to_json(\Yii::$app->request->post('condition'));
        if (!$model->save()) {
            Error($model->getErrorMsg());
        } else {
            return $model->id;
        }
    }

    public function actionUpdate()
    {
        $id = \Yii::$app->request->get('id', false);
        $level = PromoterLevel::findOne($id);
        if (!$level) {
            Error('该等级不存在');
        }
        $level->attributes = \Yii::$app->request->post();
        if (!$level->save()) {
            Error($level->getErrorMsg());
        } else {
            return true;
        }
    }

    public function actionView()
    {
        $id = \Yii::$app->request->get('id', 0);
        $level = PromoterLevel::findOne(['id' => $id, 'is_deleted' => 0]);
        if (!$level) {
            Error('该等级不存在');
        }
        $level = ArrayHelper::toArray($level);
        $level['condition'] = to_array($level['condition']);
        return $level;
    }

    public function actionIndex()
    {
        $behavior = \Yii::$app->request->get('behavior', 'list');
        switch ($behavior) {
            case 'list':
                return $this->getList();
            case 'option':
                return $this->getOptions();
        }

    }

    public function actionDelete()
    {
        $id = \Yii::$app->request->post('id');
        if ($id == 1) {
            Error('默认等级无法删除');
        }
        /**@var Promoter $model*/
        $model = Promoter::find()->where(['id' => $id, 'AppID' => \Yii::$app->params['AppID'], 'is_deleted' => 0])->one();
        if ($model) {
            Error('该等级分销商数不为0,无法删除');
        }
        $model->deleted_time = time();
        $model->is_deleted = 1;
        if (!$model->save()) {
            Error('删除失败');
        }
        return true;
    }

    private function getList()
    {
        $subQuery = Promoter::find()->where(['AppID' => \Yii::$app->params['AppID'], 'is_deleted' => 0])
            ->andWhere('level = pl.level')->select('count(1)');
        return PromoterLevel::find()->alias('pl')
            ->where(['pl.AppID' => \Yii::$app->params['AppID'], 'pl.is_deleted' => 0])
            ->select(['pl.id', 'pl.level', 'pl.name', 'pl.first', 'pl.second', 'pl.third', 'pl.is_auto', 'pl.update_type', 'promoter_count' => $subQuery, 'pl.created_time'])
            ->orderBy(['created_time' => SORT_DESC])
            ->asArray()
            ->all();
    }

    private function getOptions()
    {
        $list = PromoterLevel::find()->select('level')->where([
            'AppID' => \Yii::$app->params['AppID'],
            'is_deleted' => 0
        ])->column();

        $newList = [];
        for ($i = 1; $i <= 10; $i++) {
            $newList[] = [
                'name' => '等级' . $i,
                'level' => $i,
                'disabled' => in_array($i, $list),
            ];
        }

        return [
            'list' => $newList,
            'level' => StoreSetting('promoter_setting', 'level_number')
        ];
    }
}
