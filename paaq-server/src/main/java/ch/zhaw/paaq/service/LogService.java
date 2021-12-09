package ch.zhaw.paaq.service;

import ch.zhaw.paaq.model.Log;
import ch.zhaw.paaq.model.Sensor;
import ch.zhaw.paaq.repository.LogRepository;
import ch.zhaw.paaq.repository.SensorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class LogService {

    private final LogRepository logRepository;

    @Autowired
    public LogService(LogRepository logRepository) {
        this.logRepository = logRepository;
    }

    public Log saveLog(Log log) {
        return logRepository.save(log);
    }

    public List<Log> getAllLogs() {
        return logRepository.findAll();
    }

    public Optional<Log> getLogById(int id) {
        return logRepository.findById(id);
    }
}
