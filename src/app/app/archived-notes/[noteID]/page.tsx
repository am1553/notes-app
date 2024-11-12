import { Panel, PanelHeader } from "@/components/layout";
import NoteOverview from "@/components/NoteOverview";
import { Button } from "@/components/ui/button";
import React from "react";

function NotePage() {
  return (
    <Panel>
      <PanelHeader />
      <hr className="lg:hidden" />
      <NoteOverview showLastEdited showStatus showTags />
      <hr />
      <textarea
        className="flex-1 outline-none"
        name=""
        id=""
        defaultValue={`Key performance optimization techniques:\n\n1. Code Splitting\n- Use React.lazy() for route-based splitting\n- Implement dynamic imports for heavy components\n\n2. Memoization\n- useMemo for expensive calculations\n- useCallback for function props\n- React.memo for component optimization\n\n3. Virtual List Implementation\n- Use react-window for long lists\n- Implement infinite scrolling\n\nTODO: Benchmark current application and identify bottlenecks`}
      ></textarea>

      <hr className="max-lg:hidden" />
      <div className="flex gap-4 max-lg:hidden">
        <Button>
          <span>Save</span>
        </Button>
        <Button variant={"secondary"}>
          <span>Cancel</span>
        </Button>
      </div>
    </Panel>
  );
}

export default NotePage;
