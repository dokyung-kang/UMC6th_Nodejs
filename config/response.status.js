import { StatusCodes } from "http-status-codes";

export const status = {
    // success
    SUCCESS: {status: StatusCodes.OK, "isSuccess": true, "code": 2000, "message": "success!"},

    // error
    // common err
    INTERNAL_SERVER_ERROR: {status: StatusCodes.INTERNAL_SERVER_ERROR, "isSuccess": false, "code": "COMMON000", "message": "서버 에러, 관리자에게 문의 바랍니다." },
    BAD_REQUEST: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "COMMON001", "message": "잘못된 요청입니다." },
    UNAUTHORIZED: {status: StatusCodes.UNAUTHORIZED, "isSuccess": false, "code": "COMMON002", "message": "권한이 잘못되었습니다." },
    METHOD_NOT_ALLOWED: {status: StatusCodes.METHOD_NOT_ALLOWED, "isSuccess": false, "code": "COMMON003", "message": "지원하지 않는 Http Method 입니다." },
    FORBIDDEN: {status: StatusCodes.FORBIDDEN, "isSuccess": false, "code": "COMMON004", "message": "금지된 요청입니다." },
    NOT_FOUND: {status: StatusCodes.NOT_FOUND, "isSuccess": false, "code": "COMMON005", "message": "요청한 페이지를 찾을 수 없습니다. 관리자에게 문의 바랍니다." },

    // member err
    MEMBER_NOT_FOUND: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "MEMBER4001", "message": "사용자가 없습니다."},
    NICKNAME_NOT_EXIST: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "MEMBER4002", "message": "닉네임은 필수입니다."},
    EMAIL_ALREADY_EXIST: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "MEMBER4003", "message": "이미 가입된 이메일이 존재합니다."},

    // member mission err
    MMISSION_NOT_EXIST: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "MEMBER4004", "message": "존재하지 않는 미션입니다."},

    // store err
    STORE_NOT_EXIST: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "STORE4001", "message": "존재하지 않는 가게입니다."},
    STORE_MISSION_ALREADY_EXIST: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "STORE4002", "message": "해당 가게에 이미 미션이 존재합니다."},
    REGION_NOT_EXIST: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "STORE4003", "message": "존재하지 않는 지역입니다."},

    // db error
    PARAMETER_IS_WRONG: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "DATABASE4001", "message": "쿼리 실행 시 전달되는 파라미터가 잘못되었습니다. 파라미터 개수 혹은 파라미터 형식을 확인해주세요."},

    // article err
    ARTICLE_NOT_FOUND: {status: StatusCodes.NOT_FOUND, "isSuccess": false, "code": "ARTICLE4001", "message": "게시글이 없습니다."},

    // login err
    LOGIN_PARAM_NOT_EXIST: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "SIGNIN4001", "message": "ID 혹은 PW 값이 존재하지 않습니다."},
    LOGIN_ID_NOT_EXIST : {status: StatusCodes.NOT_FOUND, "isSuccess": false, "code": "SIGNIN4002", "message": "아이디를 찾을 수 없습니다."},
    LOGIN_PASSWORD_WRONG : {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "SIGNIN4003", "message": "비밀번호가 일치하지 않습니다." }
};