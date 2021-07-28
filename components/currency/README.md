## 货币组件
目前收录了 指定分销商佣金（添加、减少、查询）

### 主要方法
指定用户添加佣金
```php
\Yii::$app->currency->setUser(\users\models\User)->commission->add($price, $desc, $customDesc);
```
指定用户减少佣金
```php
\Yii::$app->currency->setUser(\users\models\User)->commission->sub($price, $desc, $customDesc);
```
指定用户查询可用佣金
```php
\Yii::$app->currency->setUser(\users\models\User)->commission->select();