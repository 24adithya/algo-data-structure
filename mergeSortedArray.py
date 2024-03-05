class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """

        i=m-1
        j=n-1
        k=m+n-1

        while j>=0:
          if i>=0 and nums1[i] > nums2[j]:
            nums1[k--] = nums1[i--]
          else:
            nums1[k--] = nums1[j--]

solution = Solution()            
solution.merge([1, 2, 3, 0, 0, 0], 3, [2,5,6],3)