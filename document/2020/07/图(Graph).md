基本知识点
图可以说是所有数据结构里面知识点最丰富的一个，最基本的知识点如下。

阶（Order）、度：出度（Out-Degree）、入度（In-Degree）

树（Tree）、森林（Forest）、环（Loop）

有向图（Directed Graph）、无向图（Undirected Graph）、完全有向图、完全无向图

连通图（Connected Graph）、连通分量（Connected Component）

存储和表达方式：邻接矩阵（Adjacency Matrix）、邻接链表（Adjacency List）

围绕图的算法也是五花八门。

图的遍历：深度优先、广度优先

环的检测：有向图、无向图

拓扑排序

最短路径算法：Dijkstra、Bellman-Ford、Floyd Warshall

连通性相关算法：Kosaraju、Tarjan、求解孤岛的数量、判断是否为树

图的着色、旅行商问题等

必会知识点
图的存储和表达方式：邻接矩阵（Adjacency Matrix）、邻接链表（Adjacency List）

图的遍历：深度优先、广度优先

二部图的检测（Bipartite）、树的检测、环的检测：有向图、无向图

拓扑排序

联合-查找算法（Union-Find）

最短路径：Dijkstra、Bellman-Ford

其中，环的检测、二部图的检测、树的检测以及拓扑排序都是基于图的遍历，尤其是深度优先方式的遍历。而遍历可以在邻接矩阵或者邻接链表上进行，所以掌握好图的遍历是重中之重！因为它是所有其他图论算法的基础。

至于最短路径算法，能区分它们的不同特点，知道在什么情况下用哪种算法就很好了。

LeetCode 第 785 题