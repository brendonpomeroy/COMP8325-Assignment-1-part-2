(function(e,f,g,h,p){function r(k){for(var c=this.length;c--&&this[c]!==k;);return c}function q(k){var c=window.dataLayer=window.dataLayer||[],h=20,d=k.allExperiments||[],a,l=Object.prototype.hasOwnProperty,e,m,f,n,b={},g;for(a in d)l.call(d,a)&&(e=l.call(d[a],"enabled"),m=(m=l.call(d[a],"universal_analytics"))?d[a].universal_analytics.slot:h,f=d[a].name,n=k.variationNamesMap[a]||null,b[a]={enabled:e,slot:m,name:f,variation:n,bucketed:null!==n,active:g=!!~r.call(k.activeExperiments,a),state:g?"active":
"inactive"});for(a in b)l.call(b,a)&&b[a].bucketed&&b[a].active&&c.push({optimizely_key:a,optimizely_dimension:b[a].slot,optimizely_experiment:b[a].name,optimizely_variation:b[a].variation,optimizely_variation_state:b[a].state,optimizely_variation_active:b[a].active,event:"analyticsEvent",eventCategory:"Optimizely",eventAction:b[a].name,eventLabel:b[a].variation,eventNonInt:!0});c.push({event:"optimizely_loaded",optimizely:b})}e?q(e):(p=0,h=setInterval(function(){50<p++?(clearInterval(h),dataLayer.push({event:"optimizely_missing"})):
f[g]&&(q(f[g]),clearInterval(h))},50))})(window.optimizely,window,"optimizely");