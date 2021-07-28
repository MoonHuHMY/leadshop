<?php

namespace promoter\api;

use framework\common\BasicController;
use promoter\models\PromoterMaterial;
use yii\data\ActiveDataProvider;
use yii\helpers\ArrayHelper;

class MaterialController extends BasicController
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
        $post = \Yii::$app->request->post();
        $model = new PromoterMaterial();
        $model->attributes = $post;
        $model->AppID = \Yii::$app->params['AppID'];
        $model->merchant_id = 1;
        if (isset($post['pic_list'])) {
            $model->pic_list = to_json($post['pic_list']);
        }
        if (isset($post['video_list'])) {
            $model->video_list = to_json($post['video_list']);
        }
        if (!$model->save()) {
            Error($model->getErrorMsg());
        } else {
            return $model->id;
        }
    }

    public function actionIndex()
    {
        //获取头部信息
        $headers = \Yii::$app->getRequest()->getHeaders();
        //获取分页信息
        $pageSize = $headers->get('X-Pagination-Per-Page') ?? 20;
        $query = PromoterMaterial::find()
            ->with(['goods'])
            ->where(['AppID' => \Yii::$app->params['AppID'], 'is_deleted' => 0]);
        $get = \Yii::$app->request->get();
        $name = $get['name'] ?? false;
        if ($name) {
            $query->andWhere(['like', 'name', $name]);
        }
        $type = $get['type'] ?? false;
        if ($type) {
            $query->andWhere(['type' => $type]);
        }
        $begin = $get['begin_time'] ?? false;
        $end   = $get['end_time'] ?? false;
        if ($begin) {
            $query->andWhere(['>=', 'created_time', $begin]);
        }
        if ($end) {
            $query->andWhere(['<=', 'created_time', $end]);
        }

        $data = new ActiveDataProvider(
            [
                'query' => $query->orderBy(['created_time' => SORT_DESC])->asArray(),
                'pagination' => ['pageSize' => intval($pageSize), 'validatePage' => false],
            ]
        );
        $list = $data->getModels();
        //将所有返回内容中的本地地址代替字符串替换为域名
        $newList = str2url($list);
        foreach ($newList as &$item) {
            $item['pic_list'] = to_array($item['pic_list']);
            $item['video_list'] = to_array($item['video_list']);
            if (!empty($item['goods']) && !empty($item['goods']['slideshow'])) {
                $item['goods']['slideshow'] = to_array($item['goods']['slideshow']);
            }
        }
        $data->setModels($newList);
        return $data;
    }

    public function actionView()
    {
        $id = \Yii::$app->request->get('id', 0);
        /**@var PromoterMaterial $material*/
        $material = PromoterMaterial::find()
            ->where(['id' => $id, 'is_deleted' => 0])
            ->with(['goods'])
            ->one();
        if (!$material) {
            Error('该素材不存在');
        }
        $material = ArrayHelper::toArray($material);
        $material['goods'] = ArrayHelper::toArray($material->goods);
        if (!empty($material['goods']) && !empty($material['goods']['slideshow'])) {
            $material['goods']['slideshow'] = to_array($material['goods']['slideshow']);
        }
        $material['pic_list'] = to_array($material['pic_list']);
        return $material;
    }
}