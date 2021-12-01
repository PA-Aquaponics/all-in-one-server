package ch.zhaw.paaq.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModelProperty;

import javax.persistence.*;
import javax.validation.constraints.*;

/**
 * Sensor
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2021-11-10T15:30:58.573456300+01:00[Europe/Berlin]")
@Entity
@Table(name = "mod_bus_entity")
public class Sensor   {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @JsonProperty("entityId")
  private Integer entityId;

  @JsonProperty("Name")
  @Column(name = "Name")
  private String name;

  @JsonProperty("SerialNrDevice")
  private String serialNrDevice;

  @JsonProperty("deviceType")
  private String deviceType;

  @JsonProperty("unit")
  private String unit;

  @JsonProperty("tank")
  private String tank;

  @JsonProperty("system")
  private String system;

  @JsonProperty("startingPos")
  private Integer startingPos;

  @JsonProperty("length")
  private Integer length;

  @JsonProperty("dataType")
  private String dataType;

  @JsonProperty("modBusPort")
  private Integer modBusPort;

  @JsonProperty("serial_port")
  private String serialPort;

  @JsonProperty("alarmUpperLimit")
  private Integer alarmUpperLimit;

  @JsonProperty("alarmLowerLimit")
  private Integer alarmLowerLimit;

  @JsonProperty("alaramActive")
  private Integer alaramActive;

  public Sensor entityId(Integer entityId) {
    this.entityId = entityId;
    return this;
  }

  /**
   * Get id
   * @return id
  */
  @ApiModelProperty(example = "55", value = "")


  public Integer getEntityId() {
    return entityId;
  }

  public void setEntityId(Integer id) {
    this.entityId = id;
  }

  public Sensor name(String name) {
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
  */
  @ApiModelProperty(example = "A_O2 % Sat", required = true, value = "")
  @NotNull


  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Sensor serialNrDevice(String serialNrDevice) {
    this.serialNrDevice = serialNrDevice;
    return this;
  }

  /**
   * Get serialNrDevice
   * @return serialNrDevice
  */
  @ApiModelProperty(example = "12770000001", required = true, value = "")
  @NotNull


  public String getSerialNrDevice() {
    return serialNrDevice;
  }

  public void setSerialNrDevice(String serialNrDevice) {
    this.serialNrDevice = serialNrDevice;
  }

  public Sensor deviceType(String deviceType) {
    this.deviceType = deviceType;
    return this;
  }

  /**
   * Get deviceType
   * @return deviceType
  */
  @ApiModelProperty(example = "O", required = true, value = "")
  @NotNull


  public String getDeviceType() {
    return deviceType;
  }

  public void setDeviceType(String deviceType) {
    this.deviceType = deviceType;
  }

  public Sensor unit(String unit) {
    this.unit = unit;
    return this;
  }

  /**
   * Get unit
   * @return unit
  */
  @ApiModelProperty(example = "%", required = true, value = "")
  @NotNull


  public String getUnit() {
    return unit;
  }

  public void setUnit(String unit) {
    this.unit = unit;
  }

  public Sensor tank(String tank) {
    this.tank = tank;
    return this;
  }

  /**
   * Get tank
   * @return tank
  */
  @ApiModelProperty(example = "A", required = true, value = "")
  @NotNull


  public String getTank() {
    return tank;
  }

  public void setTank(String tank) {
    this.tank = tank;
  }

  public Sensor system(String system) {
    this.system = system;
    return this;
  }

  /**
   * Get system
   * @return system
  */
  @ApiModelProperty(example = "Aqualab", required = true, value = "")
  @NotNull


  public String getSystem() {
    return system;
  }

  public void setSystem(String system) {
    this.system = system;
  }

  public Sensor startingPos(Integer startingPos) {
    this.startingPos = startingPos;
    return this;
  }

  /**
   * Get startingPos
   * @return startingPos
  */
  @ApiModelProperty(example = "0", required = true, value = "")
  @NotNull


  public Integer getStartingPos() {
    return startingPos;
  }

  public void setStartingPos(Integer startingPos) {
    this.startingPos = startingPos;
  }

  public Sensor length(Integer length) {
    this.length = length;
    return this;
  }

  /**
   * Get length
   * @return length
  */
  @ApiModelProperty(example = "2", required = true, value = "")
  @NotNull


  public Integer getLength() {
    return length;
  }

  public void setLength(Integer length) {
    this.length = length;
  }

  public Sensor dataType(String dataType) {
    this.dataType = dataType;
    return this;
  }

  /**
   * Get dataType
   * @return dataType
  */
  @ApiModelProperty(example = "float", required = true, value = "")
  @NotNull


  public String getDataType() {
    return dataType;
  }

  public void setDataType(String dataType) {
    this.dataType = dataType;
  }

  public Sensor modBusPort(Integer modBusPort) {
    this.modBusPort = modBusPort;
    return this;
  }

  /**
   * Get modBusPort
   * @return modBusPort
  */
  @ApiModelProperty(example = "10", required = true, value = "")
  @NotNull


  public Integer getModBusPort() {
    return modBusPort;
  }

  public void setModBusPort(Integer modBusPort) {
    this.modBusPort = modBusPort;
  }

  public Sensor serialPort(String serialPort) {
    this.serialPort = serialPort;
    return this;
  }

  /**
   * Get serialPort
   * @return serialPort
  */
  @ApiModelProperty(example = "/dev/ttyUSB0", required = true, value = "")
  @NotNull


  public String getSerialPort() {
    return serialPort;
  }

  public void setSerialPort(String serialPort) {
    this.serialPort = serialPort;
  }

  public Sensor alarmUpperLimit(Integer alarmUpperLimit) {
    this.alarmUpperLimit = alarmUpperLimit;
    return this;
  }

  /**
   * Get alarmUpperLimit
   * @return alarmUpperLimit
  */
  @ApiModelProperty(example = "0", required = true, value = "")
  @NotNull


  public Integer getAlarmUpperLimit() {
    return alarmUpperLimit;
  }

  public void setAlarmUpperLimit(Integer alarmUpperLimit) {
    this.alarmUpperLimit = alarmUpperLimit;
  }

  public Sensor alarmLowerLimit(Integer alarmLowerLimit) {
    this.alarmLowerLimit = alarmLowerLimit;
    return this;
  }

  /**
   * Get alarmLowerLimit
   * @return alarmLowerLimit
  */
  @ApiModelProperty(example = "0", required = true, value = "")
  @NotNull


  public Integer getAlarmLowerLimit() {
    return alarmLowerLimit;
  }

  public void setAlarmLowerLimit(Integer alarmLowerLimit) {
    this.alarmLowerLimit = alarmLowerLimit;
  }

  public Sensor alaramActive(Integer alaramActive) {
    this.alaramActive = alaramActive;
    return this;
  }

  /**
   * Get alaramActive
   * @return alaramActive
  */
  @ApiModelProperty(example = "0", value = "")


  public Integer getAlaramActive() {
    return alaramActive;
  }

  public void setAlaramActive(Integer alaramActive) {
    this.alaramActive = alaramActive;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Sensor sensor = (Sensor) o;
    return Objects.equals(this.entityId, sensor.entityId) &&
        Objects.equals(this.name, sensor.name) &&
        Objects.equals(this.serialNrDevice, sensor.serialNrDevice) &&
        Objects.equals(this.deviceType, sensor.deviceType) &&
        Objects.equals(this.unit, sensor.unit) &&
        Objects.equals(this.tank, sensor.tank) &&
        Objects.equals(this.system, sensor.system) &&
        Objects.equals(this.startingPos, sensor.startingPos) &&
        Objects.equals(this.length, sensor.length) &&
        Objects.equals(this.dataType, sensor.dataType) &&
        Objects.equals(this.modBusPort, sensor.modBusPort) &&
        Objects.equals(this.serialPort, sensor.serialPort) &&
        Objects.equals(this.alarmUpperLimit, sensor.alarmUpperLimit) &&
        Objects.equals(this.alarmLowerLimit, sensor.alarmLowerLimit) &&
        Objects.equals(this.alaramActive, sensor.alaramActive);
  }

  @Override
  public int hashCode() {
    return Objects.hash(entityId, name, serialNrDevice, deviceType, unit, tank, system, startingPos, length, dataType, modBusPort, serialPort, alarmUpperLimit, alarmLowerLimit, alaramActive);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Sensor {\n");
    
    sb.append("    id: ").append(toIndentedString(entityId)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    serialNrDevice: ").append(toIndentedString(serialNrDevice)).append("\n");
    sb.append("    deviceType: ").append(toIndentedString(deviceType)).append("\n");
    sb.append("    unit: ").append(toIndentedString(unit)).append("\n");
    sb.append("    tank: ").append(toIndentedString(tank)).append("\n");
    sb.append("    system: ").append(toIndentedString(system)).append("\n");
    sb.append("    startingPos: ").append(toIndentedString(startingPos)).append("\n");
    sb.append("    length: ").append(toIndentedString(length)).append("\n");
    sb.append("    dataType: ").append(toIndentedString(dataType)).append("\n");
    sb.append("    modBusPort: ").append(toIndentedString(modBusPort)).append("\n");
    sb.append("    serialPort: ").append(toIndentedString(serialPort)).append("\n");
    sb.append("    alarmUpperLimit: ").append(toIndentedString(alarmUpperLimit)).append("\n");
    sb.append("    alarmLowerLimit: ").append(toIndentedString(alarmLowerLimit)).append("\n");
    sb.append("    alaramActive: ").append(toIndentedString(alaramActive)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

  public Sensor() {}
}

