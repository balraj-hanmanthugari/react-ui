import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getStudents = createAsyncThunk("getStudents", async (data, { rejectWithValue }) => {
    try {
        console.log(data);
        return await axios.get('http://localhost:8080/students?name=e');
    } catch(error) {
        return rejectWithValue(error);
    }
});

export const getStudent = createAsyncThunk("getStudent", async (id, { rejectWithValue }) => {
    console.log(id);
    const response = await axios.get(`http://localhost:8080/students/${id}`);
    response.id = id;
    return response;
});

export const createStudent = createAsyncThunk("createStudent", async (data, { rejectWithValue }) => {
    console.log(data);
    const response = await axios.post(`http://localhost:8080/students`, data);
    response.data = data;
    return response;
});

export const updateStudent = createAsyncThunk("updateStudent", async (data, { rejectWithValue }) => {
    console.log(data.id);
    const response = await axios.put(`http://localhost:8080/students/${data.id}`, data);
    response.data = data;
    return response;
});

export const deleteStudent = createAsyncThunk("deleteStudent", async (id, { rejectWithValue }) => {
    console.log(id);
    const response = await axios.delete(`http://localhost:8080/students/${id}`);
    response.id = id;
    return response;
});

const studentsSlice = createSlice({
    name: 'students',
    initialState: {
        loading: false,
        students: [],
        error: ''
    },
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(getStudents.pending, (state, action) => {
            console.log(action);
            state.loading = true;
        })
        .addCase(getStudents.fulfilled, (state, action) => {
            console.log(action);
            state.loading = false;
            state.students = action.payload.data.students;
        })
        .addCase(getStudents.rejected, (state, action) => {
            console.log(action);
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(createStudent.pending, (state, action) => {
            console.log(action);
            state.loading = true;
        })
        .addCase(createStudent.fulfilled, (state, action) => {
            console.log(action);
            state.loading = false;
            state.students.push(action.payload.data);
        })
        .addCase(createStudent.rejected, (state, action) => {
            console.log(action);
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(updateStudent.pending, (state, action) => {
            console.log(action);
            state.loading = true;
        })
        .addCase(updateStudent.fulfilled, (state, action) => {
            console.log(action);
            state.loading = false;
            let student = state.students.find((student => {
                return student.id === action.payload.id;
            }));
            student = action.payload.data;
        })
        .addCase(updateStudent.rejected, (state, action) => {
            console.log(action);
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(deleteStudent.pending, (state, action) => {
            console.log(action);
            state.loading = true;
        })
        .addCase(deleteStudent.fulfilled, (state, action) => {
            console.log(action);
            state.loading = false;
            state.students = state.students.filter((student => {
                return student.id !== action.payload.id;
            }));
        })
        .addCase(deleteStudent.rejected, (state, action) => {
            console.log(action);
            state.loading = false;
            state.error = action.payload;
        })
    }
});

export default studentsSlice.reducer;