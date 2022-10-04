export class CustomError extends Error {
  public statusCode: number;
  public data: any;

  constructor(args: { message?: string; statusCode?: number; data?: any }) {
    super(args.message);
    this.statusCode = args.statusCode || 500;
    this.data = args.data;
  }

  toString() {
    return {
      message: this.message,
      statusCode: this.statusCode,
      data: this.data,
    };
  }
}

export class NotFoundError extends CustomError {
  constructor() {
    super({ message: "NOT_FOUND", statusCode: 404 });
  }
}
