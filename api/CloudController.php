<?php

namespace leadmall\api;

use basics\api\BasicsController as BasicsModules;
use leadmall\Map;
use Yii;

class CloudController extends BasicsModules implements Map
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

    public function actionIndex()
    {
        $headers = \Yii::$app->getRequest()->getHeaders();
        //获取分页信息
        $pageSize = $headers->get('X-Pagination-Per-Page') ?? 5;
        $page     = \Yii::$app->request->get('page', 1);
        return \Yii::$app->cloud->update->getVersionData([
            'page'  => $page,
            'limit' => $pageSize,
        ]);
    }

    public function actionCreate($value = '')
    {
        if (file_exists(Yii::$app->basePath . "/install.lock")) {
            return @file_get_contents(Yii::$app->basePath . "/install.lock");
        } else {
            Error("锁文件不存在");
        }
    }
}
