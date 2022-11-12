export type TransactionStatus = "initial" | "pending" | "success" | "error";

export interface TxHook<ResponseData, Args = {}> {
  data: ResponseData | null;
  load: TxHookLoadMethod;
  status: TransactionStatus;
}

export type TxHookLoadMethod<Args = {}> = (args?: Args) => void;

export type ContractMethod<T, Args = { [key: string]: any }> = (
  args: Args,
  gasAmount?: string,
  depositAmount?: string
) => Promise<T>;
