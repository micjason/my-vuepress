1.`#!/bin/bash` 
  `echo "Hello World !"`
  #! 是一个约定的标记，它告诉系统这个脚本需要什么解释器来执行，即使用哪一种 Shell。
  echo 命令用于向窗口输出文本。
2.`./test.sh`  #执行脚本
一定要写成 ./test.sh，而不是 test.sh，运行其它二进制的程序也一样，直接写 test.sh，linux 系统会去 PATH 里寻找有没有叫 test.sh 的，而只有 /bin, /sbin, /usr/bin，/usr/sbin 等在 PATH 里，你的当前目录通常不在 PATH 里，所以写成 test.sh 是会找不到命令的，要用 ./test.sh 告诉系统说，就在当前目录找
3.定义变量时，变量名不加美元符号（$，PHP语言中变量需要），如：
`your_name="runoob.com"`
4.使用一个定义过的变量，只要在变量名前面加美元符号即可，如：
`your_name="qinjx"`
`echo $your_name`
`echo ${your_name}`
变量名外面的花括号是可选的，加不加都行，加花括号是为了帮助解释器识别变量的边界，比如下面这种情况：
`for skill in Ada Coffe Action Java; do
    echo "I am good at ${skill}Script"
done`
已定义的变量，可以被重新定义，如：
your_name="tom"
echo $your_name
your_name="alibaba"
echo $your_name
这样写是合法的，但注意，第二次赋值的时候不能写$your_name="alibaba"，使用变量的时候才加美元符（$）。
5.使用 readonly 命令可以将变量定义为只读变量，只读变量的值不能被改变。
#!/bin/bash
myUrl="https://www.google.com"
readonly myUrl
myUrl="https://www.runoob.com"
6.使用 unset 命令可以删除变量。语法：
unset variable_name  变量被删除后不能再次使用。unset 命令不能删除只读变量。
7.Shell 字符串：字符串是shell编程中最常用最有用的数据类型（除了数字和字符串，也没啥其它类型好用了），字符串可以用单引号，也可以用双引号，也可以不用引号。
7.1 单引号
`str='this is a string'`
单引号字符串的限制：

单引号里的任何字符都会原样输出，单引号字符串中的变量是无效的；
单引号字串中不能出现单独一个的单引号（对单引号使用转义符后也不行），但可成对出现，作为字符串拼接使用。
双引号
`your_name='runoob'
str="Hello, I know you are \"$your_name\"! \n"
echo -e $str`
输出结果为：`Hello, I know you are "runoob"! `
双引号的优点：

双引号里可以有变量
双引号里可以出现转义字符
拼接字符串
your_name="runoob"
# 使用双引号拼接
greeting="hello, "$your_name" !"
greeting_1="hello, ${your_name} !"
echo $greeting  $greeting_1
# 使用单引号拼接
greeting_2='hello, '$your_name' !'
greeting_3='hello, ${your_name} !'
echo $greeting_2  $greeting_3
输出结果为：
hello, runoob ! hello, runoob !
hello, runoob ! hello, ${your_name} !
8.获取字符串长度
string="abcd"
echo ${#string} #输出 4
9.提取子字符串
以下实例从字符串第 2 个字符开始截取 4 个字符：
string="runoob is a great site"
echo ${string:1:4} # 输出 unoo  注意：第一个字符的索引值为 0。
10.查找子字符串
查找字符 i 或 o 的位置(哪个字母先出现就计算哪个)：
string="runoob is a great site"
echo `expr index "$string" io`  # 输出 4
11.Shell 数组
bash支持一维数组（不支持多维数组），并且没有限定数组的大小。

类似于 C 语言，数组元素的下标由 0 开始编号。获取数组中的元素要利用下标，下标可以是整数或算术表达式，其值应大于或等于 0。
在 Shell 中，用括号来表示数组，数组元素用"空格"符号分割开。定义数组的一般形式为：
数组名=(值1 值2 ... 值n)
array_name=(value0 value1 value2 value3)
array_name=(
value0
value1
value2
value3
)
array_name[0]=value0
array_name[1]=value1
array_name[n]=valuen
12.读取数组 
读取数组元素值的一般格式是：${数组名[下标]} valuen=${array_name[n]}
使用 @ 符号可以获取数组中的所有元素，例如：echo ${array_name[@]}
13.获取数组的长度
获取数组长度的方法与获取字符串长度的方法相同，例如：
# 取得数组元素的个数
length=${#array_name[@]}
# 或者
length=${#array_name[*]}
# 取得数组单个元素的长度
lengthn=${#array_name[n]}
14.Shell 注释
以 # 开头的行就是注释，会被解释器忽略。

通过每一行加一个 # 号设置多行注释，像这样：
#--------------------------------------------
# 这是一个注释
# author：菜鸟教程
# site：www.runoob.com
# slogan：学的不仅是技术，更是梦想！
#--------------------------------------------
##### 用户配置区 开始 #####
#
#
# 这里可以添加脚本描述信息
# 
#
##### 用户配置区 结束  #####
多行注释
多行注释还可以使用以下格式：
:<<EOF
注释内容...
注释内容...
注释内容...
EOF
EOF 也可以使用其他符号:
:<<'
注释内容...
注释内容...
注释内容...
'

:<<!
注释内容...
注释内容...
注释内容...
!