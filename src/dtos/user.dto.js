// sign in response DTO
export const signinResponseDTO = (user, prefer) => {

    const preferFood = [];

    for (let i = 0; i < prefer.length; i++) {
        preferFood.push(prefer[0][i].name);
    }

    return {"email": user[0].email, "name": user[0].user_name, "preferCategory": preferFood};
}

// member mission response DTO
export const memberMissionResponseDTO = (membermission) => {
    return {membermission};
}