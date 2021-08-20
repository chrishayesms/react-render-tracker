import React from "react";
import { TreeElement as ITreeElement } from "../../types";
import TreeElement, { TreeElementProps } from "./TreeLeaf";

const Tree = ({
  roots,
  onSelect,
  selectedId,
  highlight,
}: Pick<TreeElementProps, "onSelect" | "selectedId" | "highlight"> & {
  roots: ITreeElement[];
}) => {
  return (
    <div className="render-tree">
      {roots?.map(root => (
        <TreeElement
          key={root.id}
          data={root}
          onSelect={onSelect}
          selectedId={selectedId}
          highlight={highlight}
          root
        />
      ))}
    </div>
  );
};

export default Tree;