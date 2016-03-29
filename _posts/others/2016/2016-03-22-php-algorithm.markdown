---
layout: post
title:  php常考的七大算法
date:   2016-03-22 22:22:44 +0800
categories: others
---
PHP面试必备!!! 虽然我从没在项目中用过 ╮(╯▽╰)╭

1.冒泡排序

* 冒泡排序是稳定排序 
* 时间复杂度是 O(n^2)

{% highlight PHP %}
<?php 
function bubble_sort($arr) { 
  $n = count($arr); 
  for($i = 0; $i < $n-1; $i++) {
    for($j = $i + 1; $j < $n; $j++) {
      if ($arr[$j] < $arr[$i]) { 
        $temp = $arr[$i]; 
        $arr[$i] = $arr[$j]; 
        $arr[$j] = $temp; 
      } 
    } 
  } 

  return $arr;
}
?>
{% endhighlight %}

2.归并排序

* 把数组分成最小的单元, 即两个单元作比较, 左边的始终小于右边的
* 稳定，时间复杂度 O(nlog n)

{% highlight perl %}
function Merge (&$arr, $left, $mid, $right) { 
  $i = $left; 
  $j = $mid + 1; 
  $k = 0; 
  $temp = array(); 

  while ($i <= $mid && $j <= $right) { 
    if ($arr[$i] <= $arr[$j]) 
      $temp[$k++] = $arr[$i++]; 
    else 
      $temp[$k++] = $arr[$j++]; 
  } 

  while ($i <= $mid) 
    $temp[$k++] = $arr[$i++]; 

  while ($j <= $right) 
    $temp[$k++] = $arr[$j++]; 

  for ($i = $left, $j = 0; $i <= $right; $i++, $j++) 
    $arr[$i] = $temp[$j];
} 

function MergeSort(&$arr, $left, $right) { 
  if ($left < $right) { 
    $mid = floor(($left + $right) / 2); 
    MergeSort($arr, $left, $mid); 
    MergeSort($arr, $mid + 1, $right); 
    Merge($arr, $left, $mid, $right); 
  }
}
{% endhighlight %}

3. 二分查找--递归

要求数组为顺序数组
{% highlight perl %}
function bin_search($arr, $low, $high, $value) {
    if ($low > $high)
        return false;
    else {
        $mid = floor(($low + $high) / 2);
        if ($value == $arr[$mid])
            return $mid;
        elseif ($value < $arr[$mid])
            return bin_search($arr, $low, $mid - 1, $value);
        else
            return bin_search($arr, $mid + 1, $high, $value);
    }
}
{% endhighlight %}

4.二分查找---非递归
{% highlight perl %}
function bin_search($arr, $low, $high, $value) {
    while($low <= $high) {
        $mid = floor(($low + $high) / 2);
        if ($value == $arr[$mid])
            return $mid;
        elseif ($value < $arr[$mid])
            $high = $mid-1;
        else
            $low = $mid+1;
    }
    return false;
}
{% endhighlight %}


5.快速排序

选取一个值做标准, 左侧比它小, 右侧比它大, 然后再重新对左右分组再次进行排序
不稳定，时间复杂度 最理想 O(nlogn) 最差时间O(n^2
{% highlight perl %}
function quick_sort($arr) {
    $n = count($arr);
    if ($n <= 1)
        return $arr;
    $key = $arr[0];
    $left_arr = array();
    $right_arr = array();
    for ($i = 1; $i < $n; $i++) {
        if ($arr[$i] <= $key)
            $left_arr[] = $arr[$i];
        else
            $right_arr[] = $arr[$i];
    }
    $left_arr = quick_sort($left_arr);
    $right_arr = quick_sort($right_arr);

    return array_merge($left_arr, array($key), $right_arr);
}
{% endhighlight %}

6.选择排序
从第一个元素开始, 逐个比较, 记下最小值的键值, 一次比较完后把最小的值放置第一位, 继续从第二位开始比较, 很像冒泡
不稳定，时间复杂度 O(n^2)
{% highlight perl %}
function select_sort($arr) {
    $n = count($arr);
    for ($i=0; $i < $n; $i++) {
        $k = $i;
        for ($j = $i + 1; $j < $n; $j++) {
            if ($arr[$j] < $arr[$k])
                $k = $j;
            }
            if ($k != $i) {
                $temp = $arr[$i];
                $arr[$i] = $arr[$k];
                $arr[$k] = $temp;
            }
        }

    return $arr;
}
{% endhighlight %}

7.插入排序

从开始元素开始, 向前进行排序, 保证前面的排序为顺序的, 但是仅在前一个元素大于后一个元素时才开始比较, 最坏进行2n次

* 插入排序是稳定排序 
* 插入排序：O(n^2); 
{% highlight perl %}
function insertSort($arr) {
    $n = count($arr);
    for ($i = 1; $i < $n; $i++) {
        $tmp = $arr[$i];
        $j = $i-1;
        while ($arr[$j] > $tmp) {
            $arr[$j + 1] = $arr[$j];
            $arr[$j] = $tmp;
            $j--;
            if ($j < 0)
                break;
        }
    }
    
    return $arr;
}
{% endhighlight %}