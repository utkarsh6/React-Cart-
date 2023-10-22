import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import {  Radio, Rating } from "./RatingStyles";
export const Rate = () => {
    const[rate,setRate]=useState(3);

    
  return (
    <Container>
            {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                    <label>
                        <Radio
                            type="radio"
                            value={givenRating}
                            onClick={() => {
                                setRate(givenRating);
                                alert(
                                    `Are you sure you want to give
                                    ${givenRating} stars ?`
                                );
                            }}
                        />
                        <Rating>
                            <FaStar
                                color={
                                    givenRating < rate || givenRating === rate
                                        ? "000"
                                        : "rgb(192,192,192)"
                                }
                            />
                        </Rating>
                    </label>
                );
            })}
        </Container>
   
  )
}
