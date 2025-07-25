import './CohortDetails.css';

function CohortDetails(props) {
    let status="completed";
    if(props.cohort.currentStatus.toLowerCase()==='ongoing'){
        status=props.cohort.currentStatus.toLowerCase();
    }
    return (
        <div className='box'> 
            <h3 className={status}>
                {props.cohort.cohortCode} -
                <span>{props.cohort.technology}</span>
            </h3>
            <dl>
                <dt>Started On</dt>
                <dd>{props.cohort.startDate}</dd>
                <dt>Current Status</dt>
                <dd>{props.cohort.currentStatus}</dd>
                <dt>Coach</dt>
                <dd>{props.cohort.coachName}</dd>
                <dt>Trainer</dt>
                <dd>{props.cohort.trainerName}</dd>
            </dl>
        </div>

        
    );
}
export default CohortDetails;