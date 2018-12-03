/*目录
 *	1.兼容性函数,通过类名在IE(8,7)获取对应的对象集合
 *  2.获取父元素下的所有子元素节点
 *  3.获取父元素下的第一个子元素节点
 *  4.获取父元素下的最后一个子元素节点
 *  5.获取当前元素的下一个兄弟元素节点
 *  6.获取当前元素的上一个兄弟元素节点
 *  7.插入到父元素的第一个位置
 *
 */
function  getName(cName) {
	if(document.getElementsByClassName){
		return document.getElementsByClassName(cName);
	}else{
		var tags=document.all;
		var newArr=[]; 
		for (var i = 0; i < tags.length; i++) {
			var nameArr=tags[i].className.split(" ");
			if(check(nameArr,cName)){
				newArr.push(tags[i]);
			}
		}
		return newArr;
	}
}
function check(arr,val){
	for (var i = 0; i < arr.length; i++) {
		if(arr[i]==val){
			return true;
		}
	}
	return false;
}
function getChilds(parent) {
	var childs=parent.childNodes;
	var newArr=[];
	for (var i = 0; i < childs.length; i++) {
		if(childs[i].nodeType==1){
			newArr.push(childs[i]);
		}
	}
	return newArr;
}
function getFirstChild(parent){
	return 	getChilds(parent)[0];
}
function getLastChild(parent){
	var arr=getChilds(parent);
	return arr[arr.length-1];
}
function getNext(selfNode){
	if(selfNode.nextSibling==null){
		return null
	}else if(selfNode.nextSibling.nodeType==1){
		return  selfNode.nextSibling;
	}else{
		return getNext(selfNode.nextSibling);
	}
} 
function getPre(selfNode){
	if(selfNode.previousSibling==null){
		return null
	}else if(selfNode.previousSibling.nodeType==1){
		return  selfNode.previousSibling;
	}else{
		return getPre(selfNode.previousSibling);
	}
} 
function insertFirst(parent,newNode){
	var firstC=getFirstChild(parent);
	parent.insertBefore(newNode,firstC);
}
function appendBefore(newNode,selfNdoe){
	var parent=selfNdoe.parentNode;
	parent.insertBefore(newNode,selfNdoe);
}