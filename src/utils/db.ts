import { pool } from "../config/connection";

export type User = {
  id: number;
  name: string;
  email: string;
  created_at: Date;
};

// Generic query executor with error handling
export const query = async <T>(sql: string, params?: any[]): Promise<T> => {
  try {
    const [result] = await pool.query(sql, params);
    return result as T;
  } catch (error) {
    console.error("Database query failed:", error);
    throw new Error(`Database operation failed: ${(error as Error).message}`);
  }
};

// Health check
export const checkDbConnection = async (): Promise<boolean> => {
  try {
    await query<any>("SELECT 1");
    return true;
  } catch (error) {
    return false;
  }
};
