export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Tyler',
            authorLastName: 'Sweeney',
            authorId: 4242,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch(() => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err});
        })
        
    }
};