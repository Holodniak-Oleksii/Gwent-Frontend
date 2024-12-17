import { IUserModel } from "@/common/types/models";

export type TPlayer = Omit<IUserModel, "coins" | "cards" | "email">;
