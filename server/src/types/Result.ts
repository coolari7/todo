export abstract class AppError extends Error {
  constructor(public code: string, message: string, public error?: any) {
    super(message);
    Error.captureStackTrace?.(this, AppError);
  }
}

// TYPES
type TSuccess<T> = { success: true; data: T };
type TFailure<E extends AppError> = { success: false; error: E };
export type TResult<T, E extends AppError> = TSuccess<T> | TFailure<E>;

// CONVERTERS
export const successful = <T>(data: T): TSuccess<T> => ({
  success: true,
  data,
});
export const unsuccessful = <E extends AppError>(error: E): TFailure<E> => ({
  success: false,
  error,
});
