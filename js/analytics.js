window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
var trackingID = 'UA-125651501-1'
gtag('js', new Date());

function sendEvent(name) {
  gtag('event', 'click', {
    'event_category': 'Botón ' + name,
    'event_label': 'Menu'
  });
}

function sendPageview(pageName) {
  gtag('config', trackingID, {
      'page_path': '/' + pageName
    }
  );
}