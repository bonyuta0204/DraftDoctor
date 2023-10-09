import axios from 'axios';

// This code sets the XSRF-TOKEN cookie and header for all axios requests.
// This is required for Django to accept POST requests.
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
