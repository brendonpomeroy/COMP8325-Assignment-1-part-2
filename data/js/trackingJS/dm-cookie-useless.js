
                var crtg_nid="1822";
                var crtg_cookiename="co_au";
                var crtg_varname="crtg_content";
                function crtg_getCookie(c_name)
                {
                    var i,x,y,ARRCookies=document.cookie.split(";");
                    for(i=0;i<ARRCookies.length;i++)
                    {
                        x=ARRCookies[i].substr(0,ARRCookies[i].indexOf("="));
                        y=ARRCookies[i].substr(ARRCookies[i].indexOf("=")+1);
                        x=x.replace(/^\s+|\s+$/g,"");
                        if(x==c_name)
                        {
                            return unescape(y);
                        }
                    }
                    return "";
                }
                function criteoWrapper()
                {
                    var crtg_content = crtg_getCookie(crtg_cookiename);
                    var crtg_rnd=Math.floor(Math.random()*99999999999);
                    var crtg_url=location.protocol+"//rtax.criteo.com/delivery/rta/rta.js?netId="+escape(crtg_nid);
                    crtg_url+="&cookieName="+escape(crtg_cookiename);
                    crtg_url+="&rnd="+crtg_rnd;
                    crtg_url+="&varName=" + escape(crtg_varname);
                    var crtg_script=document.createElement("script");
                    crtg_script.type="text/javascript";
                    crtg_script.src=crtg_url;
                    crtg_script.id = "criteo_script";
                    crtg_script.async=true;

                    //added that
                    if (document.getElementById("criteo_script"))
                    {
                        document.getElementsByTagName("head")[0].appendChild(crtg_script);
                    }
                    //end added that

                    else if(document.getElementsByTagName("head").length>0)
                    {
                        document.getElementsByTagName("head")[0].appendChild(crtg_script);
                    }
                    else if(document.getElementsByTagName("body").length>0)
                    {
                        document.getElementsByTagName("body")[0].appendChild(crtg_script);
                    }
                }

                // call it once here and let OAS do setInterval(criteoWrapper, xxx);
                criteoWrapper();
            