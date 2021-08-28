import { AppError } from "../types/Result";

const getCode = (...names: string[]) => `ERR_${names.join("_")}`;

const getDBCode = (name: string) => getCode("DB", name);
const getAPPCode = (name: string) => getCode("APP", name);

export class CONNECTION extends AppError {
  constructor(error?: any) {
    super(
      getDBCode(CONNECTION.name),
      "Error while connecting to the database!",
      error
    );
  }
}

export class UPSERT_UNEXPECTED extends AppError {
  constructor(error?: any) {
    super(
      getDBCode(UPSERT_UNEXPECTED.name),
      "Unexpected error during upsert operation!",
      error
    );
  }
}

export class INSERT extends AppError {
  constructor(error?: any) {
    super(getDBCode(INSERT.name), "Failure while inserting document!", error);
  }
}

export class UPDATE extends AppError {
  constructor(error?: any) {
    super(getDBCode(UPDATE.name), "Failure while updating document!", error);
  }
}

export class DOCUMENT_NOT_FOUND extends AppError {
  constructor(error?: any) {
    super(getDBCode(DOCUMENT_NOT_FOUND.name), "Document Not Found!", error);
  }
}

export class NO_MATCHING_DOCUMENTS extends AppError {
  constructor(error?: any) {
    super(
      getDBCode(NO_MATCHING_DOCUMENTS.name),
      "No matching documents were found!",
      error
    );
  }
}

export class LISTEN extends AppError {
  constructor(error?: any) {
    super(
      getAPPCode(LISTEN.name),
      "Error while listening to the server!",
      error
    );
  }
}

export class UNEXPECTED extends AppError {
  constructor(error?: any) {
    super(getCode(UNEXPECTED.name), "An unexpected error occured!", error);
  }
}

export const E = {
  DB: {
    CONNECTION,
    UPSERT_UNEXPECTED,
    INSERT,
    UPDATE,
    DOCUMENT_NOT_FOUND,
    NO_MATCHING_DOCUMENTS,
  },
  APP: {
    LISTEN,
  },
  UNEXPECTED,
};
