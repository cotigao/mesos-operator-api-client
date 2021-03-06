"use strict";

module.exports = {
    "GET_HEALTH": { "supported": true, "readOnly": true },
    "GET_FLAGS": { "supported": true, "readOnly": true },
    "GET_VERSION": { "supported": true, "readOnly": true },
    "GET_METRICS": { "supported": true, "readOnly": true },
    "GET_LOGGING_LEVEL": { "supported": false, "readOnly": true },
    "SET_LOGGING_LEVEL": { "supported": false, "readOnly": false },
    "LIST_FILES": { "supported": false, "readOnly": true },
    "READ_FILE": { "supported": false, "readOnly": true },
    "GET_STATE": { "supported": true, "readOnly": true },
    "GET_CONTAINERS": { "supported": true, "readOnly": true },
    "GET_FRAMEWORKS": { "supported": true, "readOnly": true },
    "GET_EXECUTORS": { "supported": true, "readOnly": true },
    "GET_TASKS": { "supported": true, "readOnly": true },
    "GET_AGENT": { "supported": true, "readOnly": true },
    "LAUNCH_NESTED_CONTAINER": { "supported": false, "readOnly": false },
    "WAIT_NESTED_CONTAINER": { "supported": false, "readOnly": false },
    "KILL_NESTED_CONTAINER": { "supported": false, "readOnly": false },
    "REMOVE_NESTED_CONTAINER": { "supported": false, "readOnly": false },
    "LAUNCH_NESTED_CONTAINER_SESSION": { "supported": false, "readOnly": false },
    "ATTACH_CONTAINER_INPUT": { "supported": false, "readOnly": false },
    "ATTACH_CONTAINER_OUTPUT ": { "supported": false, "readOnly": false }
};