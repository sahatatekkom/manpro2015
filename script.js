function updateViews (views) {
  var spanViews = document.getElementById('views')

  spanViews.innerHTML = views
}

function addViews (ref) {
  ref.once('value')
    .then(function (snapshot) {
      var value = snapshot.val()
      ++value
      ref.set(value)
    })
}

var config = {
  apiKey: 'AIzaSyBqd3FrXvJXopBroZMuLjxx1uRzqKam3DQ',
  authDomain: 'iam-akbarsahata-id.firebaseapp.com',
  databaseURL: 'https://iam-akbarsahata-id.firebaseio.com/',
  projectId: 'iam-akbarsahata-id',
}
firebase.initializeApp(config)

var views = firebase.database().ref('views')

views.on('value', function (snapshot) {
  updateViews(snapshot.val())
})

window.onload = function () {
  addViews(views)
}