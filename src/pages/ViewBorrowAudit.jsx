import React, { useEffect } from "react";
import FormViewBorrow from "../components/FormViewBorrowAudit";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const ViewBorrowAudit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);
  return (
   
      <FormViewBorrow />

  );
};

export default ViewBorrowAudit;
