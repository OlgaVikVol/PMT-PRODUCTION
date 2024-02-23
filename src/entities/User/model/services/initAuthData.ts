import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../types/user';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localstorage';
import { getUserDataByIdQuery } from '../../api/userApi';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuthData',
    async (newJsonSettings, thunkApi) => {
        const { rejectWithValue, dispatch } = thunkApi;

        const userId = localStorage.getItem(USER_LOCAL_STORAGE_KEY);

        if (!userId) {
            return rejectWithValue('');
        }

        try {
            const responce = await dispatch(
                getUserDataByIdQuery(userId),
            ).unwrap();

            return responce;
        } catch (e) {
            console.log(e);
            return rejectWithValue('');
        }
    },
);
