type TreeBranch = {
  name: string | null
  children: TreeBranch[] | null
  isLastChild: boolean | null
  parentBranch: TreeBranch | null
};

export default TreeBranch