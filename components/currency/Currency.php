<?php
/**
 * @copyright ©2020 浙江禾成云计算有限公司
 * Created by PhpStorm.
 * User: Andy - 阿德 569937993@qq.com
 * Date: 2021/6/7
 * Time: 11:21
 */

namespace app\components\currency;

use users\models\User;
use yii\base\Component;

class Currency extends Component
{
    /**@var User $user*/
    private $user;
    private $commission;

    /**
     * @param $user
     * @return $this
     */
    public function setUser($user)
    {
        if ($user instanceof User) {
            $this->user = $user;
        } else {
            Error('用户不存在');
        }
        return $this;
    }

    /**
     * @return User
     */
    public function getUser()
    {
        if ($this->user instanceof User) {
            return $this->user;
        } else {
            Error('用户不存在');
        }
    }

    public function getCommission()
    {
        $form = new Commission();
        $promoter = $this->getUser()->promoter;
        if (!$promoter) {
            Error('指定用户不是分销商');
        }
        $form->promoter = $promoter;
        return $form;
    }
}