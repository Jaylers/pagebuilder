export const Application = {
    USER : "USER-SESSION",
    LAST_USER : "LAST-USER",
    APP_NAME : "JAYLERS-INFINITE",
    APP_KEY : "2J5A1Y1L1E9R9S4-2I5N1F1I2N5I3T7E",
};

export const Action = {
    index : "/",
    welcome : "welcome",
    home : "home",
    timeline : "timeline",
    experience : "experience",
    hobby : "hobby",
    about : "about",
    login : "login",
    register : "register",
    forget : "forget",
    reset : "reset",
    script : "script",
    new : "new",
    list : "list",
};

export const Result = {
    SUCCESS: "SUCCESS",
    ERROR: "ERROR",
    UNKNOWN : "UNKNOWN"
};

export const HttpStatus = {
    OK : {"200" : "OK"},
    CREATED : {"201": "Created"},
    NO_CONTENT : {"204": "No Content"},
    BAD_REQUEST : {"400": "Bad Request"},
    FORBIDDEN : {"403": "Forbidden"},
    NOT_FOUND : {"404": "Not Found"},
    GONE : {"410": "Gone"},
    INTERNAL_SERVER_ERROR : {"500": "Server Error"},
    BAD_GATEWAY : {"502": "Bad Gateway"}
};

export const ReqMethod = {
    GET : "GET",
    POST : "POST",
    PUR : "PUT",
    PATCH : "PATCH",
    DELETE : "DELETE"
};