# 🚀 Data Structures & Algorithms in JavaScript 🚀

<p align="center">
  <img src="https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/Focus-DSA-5C2D91?style=for-the-badge" alt="DSA"/>
  <img src="https://img.shields.io/badge/Status-In_Progress-4BC51D?style=for-the-badge" alt="Status"/>
</p>

<p align="center">
  <em>My journey through fundamental computer science concepts using JavaScript</em>
</p>

---

## 🌟 Introduction

Welcome to my Data Structures and Algorithms learning repository!  
This project documents my journey through understanding essential computer science concepts and implementing them using JavaScript.  
From basic array manipulations to complex algorithm patterns, everything is captured here with clear examples and explanations.

Whether you're a fellow learner or just browsing, I hope these implementations and notes prove helpful in your own DSA journey.

---

## 📋 Topics Covered

| Data Structure/Algorithm | Status | Topics Covered |
|:------------------------:|:------:|:--------------|
| [📦 Arrays & Strings](./arrays) | ✅ | Basic operations, Sliding Window, Two Pointers, Searching, Sorting |
| [🔗 Linked Lists](./linked-lists) | ✅ | Single, Double, Circular, Reverse, Merge, Detect Cycles |
| [📚 Stacks](./stacks) | ✅ | Implementation, Balanced Parentheses, Expression Evaluation, Min Stack |
| [🧺 Queues](./queues) | ✅ | Implementation, Circular Queue, Priority Queue, BFS Applications |
| [🌳 Trees](./trees) | ✅ | Binary Trees, BST, AVL, Tree Traversals (In/Pre/Post/Level-order) |
| [📊 Heaps](./heaps) | 🔄 | Min/Max Heap, Heap Sort, Priority Queue Implementation |
| [📈 Hash Tables](./hash-tables) | 🔄 | Implementation, Collision Resolution, Applications |
| [🕸️ Graphs](./graphs) | 🔄 | Representations, BFS, DFS, Dijkstra's, Topological Sort |
| [🧩 Recursion](./recursion) | ✅ | Base Cases, Call Stack, Classic Problems (Fibonacci, Factorial) |
| [📝 Dynamic Programming](./dynamic-programming) | 🔄 | Memoization, Tabulation, Common DP Problems |
| [🔍 Searching Algorithms](./searching) | ✅ | Binary Search, Linear Search, Jump Search |
| [⚡ Sorting Algorithms](./sorting) | ✅ | Bubble, Selection, Insertion, Merge, Quick, Heap Sort |
| [⚔️ Greedy Algorithms](./greedy) | 🔄 | Activity Selection, Huffman Coding, Dijkstra's |
| [🧠 Problem-Solving Patterns](./patterns) | 🔄 | Sliding Window, Two Pointers, Fast & Slow Pointers |

> **Legend:** ✅ - Completed, 🔄 - In Progress, 📝 - Planned

---

## 🔬 Core Concepts

### Big O Notation

Understanding algorithmic efficiency is crucial. Here's a quick reference:

| Notation | Name | Example |
|:--------:|:----:|:--------|
| O(1) | Constant | Array access, Hash table insertion |
| O(log n) | Logarithmic | Binary search, Balanced BST operations |
| O(n) | Linear | Linear search, Traversing arrays |
| O(n log n) | Linearithmic | Merge sort, Heap sort |
| O(n²) | Quadratic | Bubble sort, Insertion sort |
| O(2ⁿ) | Exponential | Recursive Fibonacci, Tower of Hanoi |

### Problem-Solving Approaches

- **Divide & Conquer**: Break problems into smaller subproblems
- **Dynamic Programming**: Solve each subproblem once and store results
- **Greedy Algorithms**: Make locally optimal choices at each step
- **Backtracking**: Build solutions incrementally and abandon paths that fail

---

## 📁 Repository Structure

```plaintext
Data-Structures-Using-JavaScript/
├── arrays/
│   ├── README.md          # Explanation of array concepts
│   ├── examples/          # Basic array operations
│   └── problems/          # Array-based problem solutions
├── linked-lists/
│   ├── README.md          # Linked list concepts
│   ├── singly/            # Singly linked list implementation
│   └── doubly/            # Doubly linked list implementation
├── stacks/
│   ├── implementation.js  # Stack implementation
│   └── problems/          # Stack-based problem solutions
├── queues/
│   ├── implementation.js  # Queue implementation
│   └── problems/          # Queue-based problem solutions
├── trees/
│   ├── binary-tree.js     # Binary tree implementation
│   ├── bst.js             # Binary search tree implementation
│   └── traversals/        # Tree traversal algorithms
├── graphs/
│   ├── representations/   # Adjacency matrix/list implementations
│   └── algorithms/        # Graph algorithms (BFS, DFS, etc.)
├── algorithms/
│   ├── searching/         # Searching algorithms
│   ├── sorting/           # Sorting algorithms
│   └── recursion/         # Recursion examples
├── design-patterns/       # Common design patterns in JS
├── utils/                 # Helper functions and utilities
├── visualizations/        # Visual representations of concepts
└── README.md              # This file


## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- Basic understanding of JavaScript

### Running Examples

Most examples can be run directly with Node:

```bash
# Run an array example
node arrays/examples/two-sum.js

# Run a sorting algorithm
node algorithms/sorting/merge-sort.js