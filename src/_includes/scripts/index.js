var COOKIE_NAME = "event_store_cookie_policy";
var PREFS_SELECTOR = 'input[name="ga-preferences"]';
var GA_ANALYTICS_ID = ""; //fix once done

function init() {
  var gaCookieValue = getCookie(COOKIE_NAME);
  var isAnalyticsCookieSet = gaCookieValue !== null;

  setupClickEvent(isAnalyticsCookieSet);

  if (isAnalyticsCookieSet) {
    toggleCookieBanner();
    if (gaCookieValue == "true") {
      setupGoogleAnalytics(GA_ANALYTICS_ID);
    }
  }

  if (location.pathname === "/view-cookies/") {
    if (!document.querySelector(PREFS_SELECTOR + ":checked") && gaCookieValue) {
      document.querySelector(PREFS_SELECTOR + '[value="' + gaCookieValue + '"]').checked = true;
    }
  }
}

function setupClickEvent(isAnalyticsCookieSet) {
  document.addEventListener("click", (e) => {
    if (e.target && e.target.name === "cookies") {
      if (e.target.value === "update") {
        var newCookieSetting = document.querySelector(PREFS_SELECTOR + ":checked");
        if (newCookieSetting !== null && newCookieSetting.value !== null) {
          setCookie(COOKIE_NAME, newCookieSetting.value === "true");
        }
        document.location.href = "/";
      }
      toggleCookieBanner(e.target.value);
    }

    if (e.target && isAnalyticsCookieSet) {
      trackExternalLink(e.target);
    }
  });
}

function trackExternalLink(target) {
  if (target.getAttribute("href") && target.getAttribute("href").indexOf("http") === 0) {
    window.gtag("event", "click", {
      event_category: "outbound",
      event_label: target.getAttribute("href"),
    });
  }
}

function toggleCookieBanner(type) {
  var cookieBanner = document.getElementsByClassName("js-cookie-banner")[0];
  var cookieBannerConfirm = document.getElementsByClassName("js-cookie-banner-confirm")[0];
  var cookieBannerReject = document.getElementsByClassName("js-cookie-banner-reject")[0];
  switch (type) {
    case "accept":
      setCookie(COOKIE_NAME, true);
      cookieBanner.toggleAttribute("hidden", true);
      cookieBannerConfirm.toggleAttribute("hidden", false);
      cookieBannerReject.toggleAttribute("hidden", true);
      break;
    case "reject":
      setCookie(COOKIE_NAME, false);
      cookieBanner.toggleAttribute("hidden", true);
      cookieBannerConfirm.toggleAttribute("hidden", true);
      cookieBannerReject.toggleAttribute("hidden", false);
      break;
    case "hide":
      cookieBanner.toggleAttribute("hidden", true);
      cookieBannerConfirm.toggleAttribute("hidden", true);
      cookieBannerReject.toggleAttribute("hidden", true);
      break;
    default:
      cookieBanner.toggleAttribute("hidden", true);
      cookieBannerConfirm.toggleAttribute("hidden", true);
      cookieBannerReject.toggleAttribute("hidden", true);
      break;
  }
}

function setCookie(name, value) {
  var maxAge = 365 * 24 * 60 * 60 * 1; // 1 year
  document.cookie = name + "=" + value + "; max-age=" + maxAge + "; path=/; secure";
}

function getCookie(name) {
  var cookieArr = document.cookie.split(";");
  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    if (name == cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
}

function setupGoogleAnalytics(analyticsId) {
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + analyticsId;
  document.getElementsByTagName("head")[0].appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", analyticsId, {
    linker: {
      domains: ["www.gov.uk"],
    },
    transport_type: "beacon",
    anonymize_ip: true, // https://developers.google.com/analytics/devguides/collection/gtagjs/ip-anonymization
    allow_google_signals: false, // https://developers.google.com/analytics/devguides/collection/gtagjs/display-features
    allow_ad_personalization_signals: false, // https://developers.google.com/analytics/devguides/collection/gtagjs/display-features
    page_title: document.title,
    page_path: location.pathname.split("?")[0],
  });
}

init();


var depth = 0;
const STEP=60;
function addEventToGraph(graph, producers, event, consumers){
  const event_name = 'event-'+event

  graph.add({  
    data: { id:event_name , name: event, event:true },
    position:{x: 400, y: depth}
  })
  depth+=STEP;
  var producer_count=0;
  producers.forEach((source_item) => {
    const producer_name = 'producer-'+source_item
    const edge_name = producer_name+'---'+event_name
    if(!graph.getElementById(producer_name).length){
      graph.add({  
        data: { id: producer_name , name:source_item, producer:true},
        position:{x: 0, y: depth}
      })
      depth+=STEP;
      producer_count++;
      
    }
    graph.add({ 
      group: 'edges',
      data: { id:edge_name, source: producer_name, target: event_name , name:"produces"}
    }) 
    
  });

  depth=depth - ( (producer_count) * STEP )

  consumers.forEach((consumed_item)=>{
    const consumer_name = 'consumer-'+consumed_item
    const edge_name = consumer_name+'---'+event_name
    if(!graph.getElementById(consumer_name).length){
      graph.add({
        data: { id: consumer_name, name: consumed_item, consumer:true},
        position:{x: 800, y: depth}
      })
        depth+=STEP;
    }
     graph.add({ 
      data: {id: edge_name, source: event_name, target: consumer_name , name:'consumes'}
    }) 
    
  }) 
  
}

function reRenderGraph(graph, type){
  if (typeof type == 'string'){
    type={
      name: type
    }
  }
  let layout = graph.layout(type)
  layout.run()
}

function eventGraph(){

  return cytoscape({
    container: document.getElementById('cy'),
      
    style: [ // the stylesheet for the graph
      {
        selector: 'node',
        style: {
          'background-color': '#666',
          'color':'white',
          'label': 'data(name)',
          "text-valign" : "center",
          "text-halign" : "center",
          'width':'label',
          'height':'label',
          'shape':'round-rectangle',
          'padding':'7px'
          }
      },
      { selector:'[producer]',  style: {'background-color':'#28a197'}},
       { selector:'[event]',  style: {'background-color':' #1d70b8'}},
     
      { selector:'[consumer]',  style: {'background-color':'#00703c'}},
        
      {
        selector: 'edge',
        style: {
          'width': 3,
          'line-color': '#ccc',
          'target-arrow-color': '#ccc',
          'target-arrow-shape': 'triangle',
          'curve-style': 'bezier',
          'line-style':'dashed',
          'label': 'data(name)',
          'color': '#666'
        }
      },
      
    ]
    
  });
}