import '../home/Home.css';
import './GamesList.css';

//Takes as input the response from GamesList to build a table from the games database
export default function GamesListTable(props) {
    return props.response.map((res, index) => {
        switch(res.status) {
            case "Upcoming":
                return (
                    <tr style={{backgroundColor: "#5AB4E0"}}>
                        <td>{index+1}</td>
                        <td>{res.title}</td>
                        <td>{res.system}</td>
                        <td>{res.release_date}</td>
                        <td>{res.status}</td>
                        <td>{res.yr_completed}</td>
                    </tr>
                )
            case "Planned":
                return (
                    <tr style={{backgroundColor: "#BDBDBD"}}>
                        <td>{index+1}</td>
                        <td>{res.title}</td>
                        <td>{res.system}</td>
                        <td>{res.release_date}</td>
                        <td>{res.status}</td>
                        <td>{res.yr_completed}</td>
                    </tr>
                )
            case "Limbo":
                return (
                    <tr style={{backgroundColor: "#FFC34D"}}>
                        <td>{index+1}</td>
                        <td>{res.title}</td>
                        <td>{res.system}</td>
                        <td>{res.release_date}</td>
                        <td>{res.status}</td>
                        <td>{res.yr_completed}</td>
                    </tr>
                )
            case "In Progress":
                return (
                    <tr style={{backgroundColor: "#FAFF69"}}>
                        <td>{index+1}</td>
                        <td>{res.title}</td>
                        <td>{res.system}</td>
                        <td>{res.release_date}</td>
                        <td>{res.status}</td>
                        <td>{res.yr_completed}</td>
                    </tr>
                )
            case "Completed":
                return (
                    <tr style={{backgroundColor: "#8EDB76"}}>
                        <td>{index+1}</td>
                        <td>{res.title}</td>
                        <td>{res.system}</td>
                        <td>{res.release_date}</td>
                        <td>{res.status}</td>
                        <td>{res.yr_completed}</td>
                    </tr>
                )
            default:
                return null;
        }
    })
}