ISQ.GUI=initializeNS("ISQ.GUI");ISQ.GUI.Pagination=ISQ.Base.extend({name:"ISQ.GUI.Pagination"});ISQ.GUI.Pagination.prototype.ctor=function(a){this.mContainers=new Array();if(typeof(a.page)==="number"&&a.page>-1){this.mPage=a.page}else{throw ("Pagination update: invalid page")}if(typeof(a.pageSize)==="number"&&a.pageSize>-1){this.mPageSize=a.pageSize}else{throw ("Pagination update: invalid pageSize")}if(typeof(a.total)==="number"&&a.total>-1){this.mTotal=a.total}else{throw ("Pagination update: invalid total")}this.mPages=Math.ceil(this.mTotal/this.mPageSize)-1;this.mShowLastPage=a.showLastPage||false;if(!ISQ.Base.isDerivedOf(a.clickHandler,ISQ.Handler)){throw ("ISQ.GUI.Pagination: invalid click handler")}this.mClickHandler=a.clickHandler;if(typeof(a.next)==="string"){this.mNextText=a.next}if(typeof(a.prev)==="string"){this.mPrevText=a.prev}};ISQ.GUI.Pagination.prototype.dtor=function(){for(var a=0;a<this.mContainers.length;++a){clearNode(this.mContainers[a])}delete this.mContainers};ISQ.GUI.Pagination.prototype.mPage;ISQ.GUI.Pagination.prototype.mPageSize;ISQ.GUI.Pagination.prototype.mPages;ISQ.GUI.Pagination.prototype.mNextText="Next";ISQ.GUI.Pagination.prototype.mPrevText="Prev";ISQ.GUI.Pagination.prototype.mShowLastPage=true;ISQ.GUI.Pagination.prototype.mTotal;ISQ.GUI.Pagination.prototype.mMiddleGroupSize=3;ISQ.GUI.Pagination.prototype.mClickHandler=null;ISQ.GUI.Pagination.prototype.mContainers=null;ISQ.GUI.Pagination.prototype.setGUI=function(c){var j=createTable(clearNode(c));var l=createRow(j);var g=(this.mMiddleGroupSize-1)/2;var f=this.mPage>g?this.mPage-g:0;var e=this.mPage<this.mPages-g?this.mPage+g:this.mPages;if(this.mPage===0){while(e-f<this.mMiddleGroupSize-1&&e<this.mPages){++e}}else{if(this.mPage===this.mPages){while(e-f<this.mMiddleGroupSize-1&&f>0){--f}}}if(this.mPage>0){var k=createTd(l,"left","middle");var b=createElement("a",k,".pagerLink &.prev");b.innerHTML=this.mPrevText;b.pagination=this;b.pageValue=this.mPage-1;b.href="javascript:void(0)";ISQ.Html.setOnclick(b,this._click);b=null}if(f>0){var k=createTd(l,"left","middle");
var b=createElement("a",k,".pagerLink");b.innerHTML="1";b.pagination=this;b.pageValue=0;b.href="javascript:void(0)";ISQ.Html.setOnclick(b,this._click);b=null;if(f>1){k=createTd(l,"left","middle");ISQ.CSS.setStyle(k,".pagerMiddle");k.innerHTML="..."}}for(var d=f;d<e+1;++d){var k=createTd(l,"left","middle");var h=null;if(d==this.mPage){h=createElement("span",k);k.className="pagerCurrent"}else{h=createElement("a",k,".pagerLink");h.pagination=this;h.pageValue=d;h.href="javascript:void(0)";ISQ.Html.setOnclick(h,this._click)}h.innerHTML=d+1;h=null}if(e<this.mPages&&this.mShowLastPage){var k=createTd(l,"left","middle");k.innerHTML="...";ISQ.CSS.setStyle(k,".pagerMiddle");addSpaceTd(l,"5px");k=createTd(l,"left","middle");var b=createElement("a",k,".pagerLink");b.innerHTML=(this.mPages+1);b.pagination=this;b.pageValue=this.mPages;b.href="javascript:void(0)";ISQ.Html.setOnclick(b,this._click);b=null}if(this.mPage<this.mPages){var k=createTd(l,"left","middle");var b=createElement("a",k,".pagerLink &.next");b.innerHTML=this.mNextText;b.pagination=this;b.pageValue=this.mPage+1;b.href="javascript:void(0)";ISQ.Html.setOnclick(b,this._click);b=null}};ISQ.GUI.Pagination.prototype.draw=function(c){c=_(c);if(!c){throw ("Pagination getNode: invalid parent")}var a=false;for(var b=0;b<this.mContainers.length&&!a;++b){if(this.mContainers[b]===c){a=true}}if(a){return}this.mContainers.push(c);this.setGUI(c)};ISQ.GUI.Pagination.prototype._click=function(){this.pagination.mClickHandler.handle(this.pageValue)};