"use strict";(self.webpackChunk_wixc3_component_playground=self.webpackChunk_wixc3_component_playground||[]).push([[896],{30896:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),a=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||i(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),a(r(87770),t),a(r(4416),t),a(r(82251),t),a(r(26408),t),a(r(38896),t),a(r(60183),t),a(r(67896),t),a(r(43554),t)},4416:function(e,t,r){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TreeViewComposable=t.TreeViewContext=void 0;const a=i(r(87363)),o=r(60183),s=r(38819),n=r(38896);t.TreeViewContext=a.default.createContext(null);class l extends a.default.Component{constructor(){super(...arguments),this.listView=a.default.createRef(),this.stateController=void 0,this.listViewKeyboardHandler=(e,t)=>{let r=!1;return this.updateState((i=>{const a=t.key,o=i.getCurrentItemId(),s=null!==o?this.getTreeViewItemMetadata(o):null;if(null!==o&&!t.ctrlKey&&!t.shiftKey)if("ArrowRight"===a){if(null!==s&&s.hasChildren&&!s.isExpanded)i.toggleExpanded(o,!0);else if(i.moveNext(),e.isSupportingSelection()){const e=i.getCurrentItemId();null!==e&&i.canSelectItem(e)?i.selectItem(e):i.clearSelection()}r=!0}else if("ArrowLeft"===a){if(null!==s&&s.isExpanded&&s.hasChildren)i.toggleExpanded(o,!1);else{const t=i.findEnabledAncestorNode(o);if(t){if(i.setCurrentItemId(t.id),e.isSupportingSelection()){const e=i.getCurrentItemId();null!==e&&i.canSelectItem(e)?i.selectItem(e):i.clearSelection()}}else i.movePrev()}r=!0}}),s.StateUpdateReason.KeyboardNavigation),r},this.onListViewChange=e=>{const{treeViewState:t}=this.props,{toggledItemsIds:r}=t;this.props.onChange({toggledItemsIds:r,...e})}}render(){const{dataSourcesArray:e,treeViewState:r,onChange:i,toggledTreeViewItemState:o,...n}=this.props,{toggledItemsIds:l,...d}=r,u={treeView:this};return this.stateController=void 0,a.default.createElement(t.TreeViewContext.Provider,{value:u},a.default.createElement(s.ListViewComposable,{ref:this.listView,dataSourcesArray:e,orientation:s.NavigationOrientation.Vertical,keyboardHandler:this.listViewKeyboardHandler,onChange:this.onListViewChange,listViewState:d,...n},this.props.children))}getDataItemById(e){return this.withListViewComposable((t=>t.getDataItemById(e)))}getListViewItemById(e){return this.withListViewComposable((t=>t.getListViewItemById(e)))}getOrderedListViewItemsIds(){return this.withListViewComposable((e=>e.getOrderedListViewItemsIds()))}getId(){return this.withListViewComposable((e=>e.getId()))}getRootElement(){return this.withListViewComposable((e=>e.getRootElement()))}getListViewState(){return this.getTreeViewState()}getSelectionType(){return this.props.selectionType}getTreeViewState(){return this.props.treeViewState}updateState(e,t=s.StateUpdateReason.Manual){const r=this.listView.current;if(r){let i=this.stateController;if(i||(i=this.stateController=new n.TreeViewStateController(this,r)),e(i),i.hasStateChanged()){const e=i.getCurrentState();this.onListViewChange(e);const r=this.props.onCurrentItemChange;return r&&i.hasCurrentChanged()&&r({itemsList:this,currentItemId:e.currentNavigatableItemId,triggeringAction:t}),!0}}return!1}withListViewComposable(e){const t=this.listView.current;if(t)return e(t);throw new Error("method should be called only after rendering")}findItemIndex(e){return this.withListViewComposable((t=>t.findItemIndex(e)))}handleItemPointerInteraction(e,t){this.updateState((r=>{r.handleInteractiveSelection(e,t)}),s.StateUpdateReason.PointerInteraction)}focus(){(0,s.focusListView)(this)}getItemsElements(){return this.withListViewComposable((e=>e.getItemsElements()))}getDataSourceItemsArray(){return this.withListViewComposable((e=>e.getListViewItemsArray()))}handleKeyboardEvent(e){const t=this.listView.current;t&&t.handleKeyboardEvent(e)}moveToNextSearchMatchingItem(e,t){const r=this.listView.current;r&&r.moveToNextSearchMatchingItem(e,t)}getTreeViewItemMetadata(e){const t=this.listView.current;if(t){const r=t.getListViewItemById(e);if(r){const{dataItem:e,...t}=r,{treeNodeDataItem:i,...a}=e;return{...t,...a}}}return null}isExpanded(e){const t=this.getTreeViewItemMetadata(e);return!!t&&t.isExpanded}isCollapsed(e){return!this.isExpanded(e)}static flattenTreeDataSource(e,t,r=o.ToggledTreeViewItemState.Collapsed){const i=[],a=t instanceof Set?t:new Set(t);for(const t of e)d(t,a,r,!1,null,0,i);return i}}function d(e,t,r,i,a,n,l){const u=e.id,c=e.children,m=!!c&&c.length>0,w=t.has(u),h=r===o.ToggledTreeViewItemState.Expanded?w:!w;if(l.push({dataItem:{treeNodeDataItem:e.dataItem,parentNodeId:a,isExpanded:h,level:n,hasChildren:m},id:u,typeAheadText:e.typeAheadText,isSelectable:(0,s.listViewDataItemIsSelectable)(e),isDisabled:e.isDisabled,isExcluded:i}),c)for(const e of c)d(e,t,r,i||!h,u,n+1,l)}t.TreeViewComposable=l,l.defaultProps={...s.DefaultCommonListViewProps,onChange:()=>{}}},67896:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TreeViewDataSource=void 0;const i=r(84161);function a(e,t){return t.index}function o(){}t.TreeViewDataSource=class{constructor(){}static createTreeViewDataSource(e,t){const{childrenResolver:r,dataItemSelector:s,isSelectable:n=!0,isExcluded:l=!1,isDisabled:d=!1,idFunction:u=a,typeAheadTextFunction:c=o}=t;return i.TreeWalker.mapNodes(e,{childrenResolver:r,mappingFunction:(e,t)=>{const r=s(e),i="boolean"==typeof n?n:n(e,t),a="boolean"==typeof l?l:l(e,t),o="boolean"==typeof d?d:d(e,t);return{id:u(e,t),dataItem:r,typeAheadText:c?c(e,t):void 0,isSelectable:i,children:void 0,isExcluded:a,isDisabled:o}},childrenSetter:(e,t)=>{e.children=t}})}}},43554:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TreeViewDOM=void 0;const i=r(38819);class a{static resolveTreeViewItemRootAttributes(e){return i.ListViewDOM.resolveListViewItemRootAttributes(e)}static resolveInnerFocusableItemAttributes(e,t=!1){return i.ListViewDOM.resolveInnerFocusableItemAttributes(e,t)}static getDataItemFromTreeViewEvent(e){const t=a.getTreeViewNodeFromTreeViewEvent(e);return t?t.treeNodeDataItem:void 0}static getTreeViewNodeFromTreeViewEvent(e){return i.ListViewDOM.getDataItemFromListViewEvent(e)}static createTreeViewNodeKeyboardEventHandler(e,t){return a.createTreeViewNodeEventHandler(e,t)}static createTreeViewNodeMouseEventHandler(e,t){return a.createTreeViewNodeEventHandler(e,t)}static createTreeViewNodeEventHandler(e,t={}){return i.ListViewDOM.createListViewItemEventHandler((t=>{const r=t.dataItem;e({event:t.event,treeViewNode:r,dataItem:r.treeNodeDataItem,treeViewItem:t.listViewItem,dataItemId:t.dataItemId})}),t)}static delegateKeyboardNavigationEvent(e,t,r={enableSelectionDelegation:!0}){return i.ListViewDOM.delegateKeyboardNavigationEvent(e,t,r)}}t.TreeViewDOM=a},82251:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TreeViewItemRoot=void 0;var i=r(38819);Object.defineProperty(t,"TreeViewItemRoot",{enumerable:!0,get:function(){return i.ListViewItemRoot}})},26408:function(e,t,r){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TreeViewItemsView=t.DefaultTreeViewItemViewProps=void 0;const a=i(r(87363)),o=r(38819),s=r(4416),n=r(72918);t.DefaultTreeViewItemViewProps={dataItemEqualityComparer:o.defaultDataItemsEqualityComparer};class l extends a.default.Component{constructor(){super(...arguments),this.listViewItemsViewDataItemEqualityComparer=(e,t)=>this.props.dataItemEqualityComparer(e.treeNodeDataItem,t.treeNodeDataItem)&&e.level===t.level&&e.isExpanded===t.isExpanded&&e.hasChildren===t.hasChildren}render(){const{dataSource:e,renderItem:t}=this.props;return a.default.createElement(s.TreeViewContext.Consumer,null,(r=>r?a.default.createElement(o.ListViewItemsView,{dataSource:e,dataItemEqualityComparer:this.listViewItemsViewDataItemEqualityComparer,renderItem:e=>{const{dataItem:i,dataItemId:s,listView:l,...d}=e,{treeNodeDataItem:u,...c}=i,m=r.treeView,w={dataItemId:s,dataItem:u,listView:m,treeView:m,...c,...d};return a.default.createElement(o.ListViewItemContext.Provider,{value:w},a.default.createElement(n.ComponentSlotRenderer,{providedComponent:t,props:w}))}}):null))}}t.TreeViewItemsView=l,l.defaultProps=t.DefaultTreeViewItemViewProps},38896:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TreeViewStateController=void 0;const i=r(60183),a=r(38819),o=r(84161);class s extends a.ListViewStateController{constructor(e,t){super(t),this.treeView=e;const{toggledItemsIds:r}=e.props.treeViewState;this.originalTreeViewState=this.currentTreeViewState={toggledItemsIds:r}}getCurrentState(){return{...super.getCurrentState(),...this.currentTreeViewState}}hasStateChanged(){if(this.isDirty){if(super.hasStateChanged())return!0;const{toggledItemsIds:e}=this.originalTreeViewState,{toggledItemsIds:t}=this.currentTreeViewState;return!(0,o.arrayEqual)(t,e)}return!1}setCurrentTreeViewStateState(e){this.currentTreeViewState=e,this.isDirty=!0}toggleExpanded(e,t){const{toggledItemsIds:r}=this.currentTreeViewState,a=this.treeView;void 0===t&&(t=!a.isExpanded(e));const s=a.props.toggledTreeViewItemState,n=(0,o.arrayClone)(r),l=n.indexOf(e);l>=0?t!==(s===i.ToggledTreeViewItemState.Expanded)&&n.splice(l,1):t===(s===i.ToggledTreeViewItemState.Expanded)&&n.push(e),this.setCurrentTreeViewStateState({toggledItemsIds:n})}findEnabledAncestorNode(e){const t=this.treeView;let r=t.getTreeViewItemMetadata(e);for(;r;){const e=r.parentNodeId;if(r=e?t.getTreeViewItemMetadata(e):null,r&&!this.isItemDisabled(r.id))return r}return null}}t.TreeViewStateController=s},60183:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TreeViewDefaultState=t.ToggledTreeViewItemState=void 0;const i=r(38819);var a;(a=t.ToggledTreeViewItemState||(t.ToggledTreeViewItemState={}))[a.Collapsed=0]="Collapsed",a[a.Expanded=1]="Expanded",t.TreeViewDefaultState={toggledItemsIds:[],...i.ListViewDefaultState}},87770:function(e,t,r){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TreeView=t.TreeViewSlots=void 0;const a=i(r(87363)),o=r(26408),s=r(4416),n=i(r(36631)),l=r(38819),d=r(60183),u=r(84161),c=r(72918);t.TreeViewSlots={renderItem:()=>c.ComponentSlot.createProvider()};class m extends a.default.Component{constructor(e){super(e),this.treeViewComposable=a.default.createRef(),this.createFlattenTreeDataSource=(0,n.default)(((e,t,r)=>s.TreeViewComposable.flattenTreeDataSource(e,t,r))),this.onTreeViewComposableStateChange=e=>{this.isControlled||this.setState({treeViewState:e});const t=this.props.onChange;t&&t(e)};const t=this.isControlled=void 0!==e.treeViewState,r=e.defaultTreeViewState;t&&r&&console.warn("When TreeView is controlled, defaultListViewState property is redundant"),t&&!e.onChange&&console.warn("When TreeView is controlled you should provide an onChange callback"),this.state={treeViewState:r||d.TreeViewDefaultState}}render(){const{toggledTreeViewItemState:e,children:t,renderItem:r,dataItemEqualityComparer:i,onChange:n,treeViewState:d,defaultTreeViewState:u,...c}=this.props,m=this.getTreeViewState(),{toggledItemsIds:w}=m,h=this.createFlattenTreeDataSource(t,w,e),I=(0,l.groupDataSourceDataItems)(h).map((e=>Array.isArray(e)?a.default.createElement(o.TreeViewItemsView,{dataSource:e,renderItem:r,dataItemEqualityComparer:i}):e));return a.default.createElement.apply(this,[s.TreeViewComposable,{ref:this.treeViewComposable,dataSourcesArray:[h],treeViewState:m,toggledTreeViewItemState:e,...c,onChange:this.onTreeViewComposableStateChange},...I])}withTreeViewComposable(e){const t=this.treeViewComposable.current;if(t)return e(t);throw new Error("method should be called only after rendering")}handleItemPointerInteraction(e,t){this.withTreeViewComposable((r=>r.handleItemPointerInteraction(e,t)))}findItemIndex(e){return this.withTreeViewComposable((t=>t.findItemIndex(e)))}getItemsElements(){return this.withTreeViewComposable((e=>e.getItemsElements()))}getCurrentDataItem(){const e=this.getCurrentDataSourceItem();return void 0!==e?e.dataItem.treeNodeDataItem:void 0}getCurrentDataSourceItem(){const e=this.getListViewState().currentNavigatableItemId;return null!==e?this.getDataSourceItemById(e):void 0}getDataSourceItemById(e){return(0,u.arrayFindValue)(this.getDataSourceItemsArray(),(t=>t.id===e))}getDataSourceItemsArray(){return this.withTreeViewComposable((e=>e.getDataSourceItemsArray()))}focus(){(0,l.focusListView)(this)}handleKeyboardEvent(e){const t=this.treeViewComposable.current;t&&t.handleKeyboardEvent(e)}moveToNextSearchMatchingItem(e,t){const r=this.treeViewComposable.current;r&&r.moveToNextSearchMatchingItem(e,t)}getDataItemById(e){return this.withTreeViewComposable((t=>t.getDataItemById(e)))}getListViewItemById(e){return this.withTreeViewComposable((t=>t.getListViewItemById(e)))}getOrderedListViewItemsIds(){return this.withTreeViewComposable((e=>e.getOrderedListViewItemsIds()))}getId(){return this.withTreeViewComposable((e=>e.getId()))}getRootElement(){return this.withTreeViewComposable((e=>e.getRootElement()))}getListViewState(){return this.getTreeViewState()}getSelectionType(){return this.props.selectionType}getTreeViewState(){return this.isControlled?this.props.treeViewState:this.state.treeViewState}updateState(e,t=l.StateUpdateReason.Manual){return this.withTreeViewComposable((r=>r.updateState(e,t)))}}t.TreeView=m,m.defaultProps={toggledTreeViewItemState:d.ToggledTreeViewItemState.Collapsed,...l.DefaultCommonListViewProps,...o.DefaultTreeViewItemViewProps},m.slots=t.TreeViewSlots}}]);