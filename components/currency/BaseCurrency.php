<?php
/**
 * @copyright ©2020 浙江禾成云计算有限公司
 * Created by PhpStorm.
 * User: Andy - 阿德 569937993@qq.com
 * Date: 2021/6/7
 * Time: 11:21
 */

namespace app\components\currency;

abstract class BaseCurrency
{
    // 收入
    abstract public function add($price, $desc, $customDesc);

    // 支出
    abstract public function sub($price, $desc, $customDesc);

    // 查询
    abstract public function select();

    // 退款
    abstract public function refund($price, $desc, $customDesc);

    // 操作日志
    abstract public function createLog($type, $price, $desc, $customDesc);

    public function addCurrency($price, $desc, $customDesc)
    {
        $res = $this->add($price, $desc, $customDesc);
        $this->createLog('add', $price, $desc, $customDesc);
        return $res;
    }

    public function subCurrency($price, $desc, $customDesc)
    {
        $res = $this->sub($price, $desc, $customDesc);
        $this->createLog('sub', $price, $desc, $customDesc);
        return $res;
    }

    public function refundCurrency($price, $desc, $customDesc)
    {
        $res = $this->refund($price, $desc, $customDesc);
        $this->createLog('refund', $price, $desc, $customDesc);
        return $res;
    }
}