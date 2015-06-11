
var VVG = {};
VVG.DOM = {
    $: function(id) {
        return typeof id == "string" ? document.getElementById(id) : id;
    },
    $$: function(tag, parent) {
        return parent.getElementsByTagName(tag);
    },
    bindEvent: function(node, type, func) {
        if (node.addEventListener) {
            node.addEventListener(type, func, false);
        } else if (node.attachEvent) {
            node.attachEvent("on" + type, func);
        } else {
            node["on" + type] = func;
        }
    },
    unbindEvent: function(node, type, func) {
        if (node.removeElementListener) {
            node.removeElementListener(type, func, false);
        } else if (node.detachEvent) {
            node.detachEvent("on" + type, func);
        } else {
            node["on" + type] = null;
        }
    },
    getEvent: function(event) {
        return event ? event : window.event;
    },
    getTarget: function(event) {
        return event.target || event.srcElement;
    },
    preventDefault: function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    stopBubble: function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    setOpacity:function(node,value){
        if(document.all){
            node.style.filter = "alpha(opacity = "+ value +")";
        }else{
            node.style.opacity = value/100;
        }
    },
    setCss:function( node,cssJson){
        for(var i in cssJson){
            if(i =="opacity"){
                VVG.DOM.setOpacity(node,cssJson[i]);
            }else{
                node.style[i] = cssJson[i];
            }
        }
        return node;
    }
}