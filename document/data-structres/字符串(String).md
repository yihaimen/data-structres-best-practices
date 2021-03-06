串：
由零个或多个字符组成的有限序列，又名字符串。

举例：翻转字符串“algorithm”。

解法：用两个指针，一个指向字符串的第一个字符 a，一个指向它的最后一个字符 m，然后互相交换。交换之后，两个指针向中央一步步地靠拢并相互交换字符，直到两个指针相遇。这是一种比较快速和直观的方法。

注意：由于无法直接修改字符串里的字符，所以必须先把字符串变换为数组，然后再运用这个算法。

LeetCode 第 242 题

在实际操作中，我们经常会用到一些特殊的字符串：
空串
空格串
子串
主串

字符串的存储结构与线性表相同，也有顺序存储和链式存储两种。
字符串的顺序存储结构，是用一组地址连续的存储单元来存储串中的字符序列，一般是用定长数组来实现。有些语言会在串值后面加一个不计入串长度的结束标记符，比如 \0 来表示串值的终结。

字符串的链式存储结构，与线性表是相似的，但由于串结构的特殊性（结构中的每个元素数据都是一个字符），如果也简单地将每个链结点存储为一个字符，就会造成很大的空间浪费。因此，一个结点可以考虑存放多个字符，如果最后一个结点未被占满时，可以使用 "#" 或其他非串值字符补全

在链式存储中，每个结点设置字符数量的多少，与串的长度、可以占用的存储空间以及程序实现的功能相关。
如果字符串中包含的数据量很大，但是可用的存储空间有限，那么就需要提高空间利用率，相应地减少结点数量。
而如果程序中需要大量地插入或者删除数据，如果每个节点包含的字符过多，操作字符就会变得很麻烦，为实现功能增加了障碍。

串的链式存储结构除了在连接串与串操作时有一定的方便之外，总的来说，不如顺序存储灵活，在性能方面也不如顺序存储结构好

子串查找（字符串匹配）
我们来定义两个概念，主串和模式串。我们在字符串 A 中查找字符串 B，则 A 就是主串，B 就是模式串。我们把主串的长度记为 n，模式串长度记为 m。由于是在主串中查找模式串，因此，主串的长度肯定比模式串长，n>m。因此，字符串匹配算法的时间复杂度就是 n 和 m 的函数。

串的比较是通过组成串的字符之间的编码来进行的，即字符在对应字符集中的序号，ASCLL编码，8位二进制数表示一个字符

虽然串的逻辑结构和线性表很相似，但是串是针对字符集进行处理，重点是对子串的操作，而线性表关注单个元素的操作

串的顺序存储结构：用一组地址连续的存储单元来存储串中的字符序列，一般用定长数组来定义
但是对串的操作难免会是串长变化，它应该是个动态分配的字符串

串的链式存储结构：除了在连接串与串操作时有一定的方便，总体不如顺序存储灵活，性能也不如顺序存储结构好

朴素的模式匹配算法：低效 - 重复遍历

KMP模式匹配算法：避免不必要的回溯