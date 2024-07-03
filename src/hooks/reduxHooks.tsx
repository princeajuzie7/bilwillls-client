import { useDispatch, useSelector, useStore } from "react-redux";
import { AppDispatch, AppStore, RootState } from "@/store";

export const UseAppDispatch = useDispatch.withTypes<AppDispatch>();
export const UseAppSelector = useSelector.withTypes<RootState>();
export const UseAppStore = useStore.withTypes<AppStore>();
