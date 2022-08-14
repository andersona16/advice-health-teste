import { Routes, Route } from 'react-router-dom';
import ConsultAppointments from '../pages/ConsultAppointments';
import AppointmentTimes from '../pages/AppointmentTimes';
import WorkSpace from '../pages/Workspace';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<WorkSpace />} />
      <Route path="/workspace" element={<WorkSpace />} />
      <Route path="/consult-appointments" element={<ConsultAppointments />} />
      <Route path="/appointment-times" element={<AppointmentTimes />} />
    </Routes>
  );
}

export { AppRoutes };
