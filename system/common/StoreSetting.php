<?php
/**
 * 获取系统配置
 */
namespace framework\common;

use setting\models\Setting;

class StoreSetting
{
    public function get($keyword, $content_key)
    {
        $merchant_id = 1;
        $AppID       = \Yii::$app->params['AppID'];
        $where       = [
            'merchant_id' => $merchant_id,
            'AppID'       => $AppID,
        ];

        if ($keyword) {
            $where['keyword'] = $keyword;
            $data             = Setting::find()->where($where)->select('keyword,content')->asArray()->one();

            if ($data) {
                $data['content'] = to_array($data['content']);
                if ($content_key) {
                    if (isset($data['content'][$content_key])) {
                        return str2url($data['content'][$content_key]);
                    } else {
                        return null;
                    }

                }
                return str2url($data['content']);
            } else {
                return null;
            }
        } else {
            $data = Setting::find()->where($where)->select('keyword,content')->asArray()->all();
            foreach ($data as &$value) {
                $value['content'] = to_array($value['content']);
            }
            return str2url($data);
        }

    }
}
