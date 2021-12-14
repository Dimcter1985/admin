export const PORTAL_URL = window.location.hostname === 'localhost'
  ? process.env.REACT_APP_PORTAL_URL
  : window.location.origin
export const APP_AUTH_STORAGE_KEY = 'snailz.auth'
export const GOOGLE_API_URL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA_MJPIEg8Ua7AX0sfd9rP-8xMCH2jGVro&libraries=places'

export const choicesOfWebResorces = [
  { id: 'website', name: 'Website' },
  { id: 'instagram', name: 'Instagram' },
  { id: 'twitter', name: 'Twitter' },
  { id: 'facebook', name: 'Facebook' },
  { id: 'imdb', name: 'Imdb' },
  { id: 'youtube', name: 'Youtube' },
  { id: 'podcast', name: 'Podcast' },
  { id: 'yelp', name: 'Yelp' },
  { id: 'vimeo', name: 'Vimeo' },
]

export const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
