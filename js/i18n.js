// ** README **
// Do not edit anything unless you know what it is doing.
// You should only edit stuff between '//<edit>' and '//</edit>'

;;      ;;  ;;      ;;  ;;      ;;      ;;      ;;      ;;  ;;      ;;    ;;;;;;
  ;;  ;;    ;;      ;;    ;;  ;;      ;;  ;;    ;;;;    ;;  ;;;;  ;;;;  ;;      ;;
    ;;      ;;      ;;      ;;      ;;      ;;  ;;  ;;  ;;  ;;  ;;  ;;  ;;
    ;;      ;;      ;;      ;;      ;;;;;;;;;;  ;;    ;;;;  ;;      ;;  ;;      ;;
    ;;        ;;;;;;        ;;      ;;      ;;  ;;      ;;  ;;      ;;    ;;;;;;


//<edit>

var language="zh_cn";
var localization={
    zh_cn:{
        tmt:{
            devSpeed:"<br>时间加速: {devSpeed}x",
            offTime:"<br>离线加速剩余时间: {offTime}",
            points:'<span class="overlayThing">你有 <h2 class="overlayThing" id="points"> {points}</h2> {pointsName}</span>',
            otherTab:{
                symbol:"↓ 其他页面 ↓"
            },
            setting:{
                symbol:"设置"
            },
            information:{
                symbol:"信息"
            },
            changelog:{
                symbol:"更新日志"
            }
        }
    },
    en_us:{
        tmt:{
            devSpeed:"<br>Dev Speed: {devSpeed}x",
            offTime:"<br>Offline Time: {offTime}",
            points:'<span class="overlayThing">You have <h2 class="overlayThing" id="points"> {points}</h2> {pointsName}</span>',
            otherTab:{
                symbol:"↓ Other Tab ↓"
            },
            setting:{
                symbol:"Setting"
            },
            information:{
                symbol:"Information"
            },
            changelog:{
                symbol:"Changelog"
            }
        }
    }
};

//</edit>

// String formatter from https://www.letianbiji.com/article/101571.html;

if (!String.prototype.format) {
    String.prototype.format = function(args) {
        return this.replace(/{([\s\S]+?)}/g, function(match, number) { 
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
            ;
        });
    };
}

// I18N by yuyanMC;

let _cu=localization[language];
function switchLanguage(newLanguage){
    if(newLanguage in Object.getOwnPropertyNames(localization)){
        language=newLanguage;
        _cu=localization[language];
        return true;
    }
    return false;
}
function getLocalization(localizationNode,params){
    let _l=localizationNode.split(".");
    let _c=_cu;
    for(let i=0;i<_l.length;i++){
        _c=_c[_l[i]];
        if(_c==undefined){
            return undefined;
        }
    }
    if(typeof _c == "string"){
        if(params){
            return _c.format(params);
        }else{
            return _c
        }
    }else{
        return undefined;
    }
}
function localize(rawString,params){
    return rawString.replace(/{([\s\S]+?)}/g, function(match, number) { 
        return typeof getLocalization(number,params) != 'undefined'
            ? getLocalization(number,params)
            : match
        ;
    });
}