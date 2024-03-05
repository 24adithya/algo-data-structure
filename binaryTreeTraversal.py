# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# Case 1:


F = TreeNode('F')
B = TreeNode('B')
G = TreeNode('G')
A = TreeNode('A')
D = TreeNode('D')
I = TreeNode('I')
C = TreeNode('C')
E = TreeNode('E')
H = TreeNode('H')

F.left = B
F.right = G
B.left = A
B.right = D
D.left = C
D.right = E
G.right = I
I.left = H

#      F
#    /   \
#   B      G
#  / \      \
# A   D      I
#    / \    /
#   C  E   H


def depthFirstTraversal(root):
    if root == None:
        return []

    leftTreeValues = depthFirstTraversal(root.left)
    rightTreeValues = depthFirstTraversal(root.right)

    return list(leftTreeValues + rightTreeValues + [root.val])


print(depthFirstTraversal(F))
