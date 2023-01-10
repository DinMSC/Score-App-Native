import Navbar from './src/components/Navbar';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
    return (
        <PaperProvider>
            <Navbar />
        </PaperProvider>
    );
}
