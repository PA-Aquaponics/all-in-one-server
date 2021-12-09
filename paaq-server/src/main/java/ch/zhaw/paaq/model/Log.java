package ch.zhaw.paaq.model;

import java.sql.Time;
import java.sql.Timestamp;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.openapitools.jackson.nullable.JsonNullable;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * Log
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2021-11-10T15:30:58.573456300+01:00[Europe/Berlin]")
@Entity
@Table(name = "mod_bus_log")
public class Log   {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @JsonProperty("logId")
  private Integer logId;

  @JsonProperty("name")
  private String name;

  @JsonProperty("serialNrDevice")
  private String serialNrDevice;

  @JsonProperty("value")
  private Float value;

  @JsonProperty("unit")
  private String unit;

  @JsonProperty("tank")
  private String tank;

  @JsonProperty("system")
  private String tankSystem;

  @JsonProperty("timestamp")
  private Timestamp timestamp;

  public Log logId(Integer logId) {
    this.logId = logId;
    return this;
  }

  /**
   * Get logId
   * @return logId
  */
  @ApiModelProperty(example = "55", value = "")


  public Integer getLogId() {
    return logId;
  }

  public void setLogId(Integer logId) {
    this.logId = logId;
  }

  public Log name(String name) {
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

  public Log serialNrDevice(String serialNrDevice) {
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


  public Log unit(String unit) {
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

  public Log tank(String tank) {
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

  public Log tankSystem(String tankSystem) {
    this.tankSystem = tankSystem;
    return this;
  }

  /**
   * Get tankSystem
   * @return tankSystem
  */
  @ApiModelProperty(example = "Aqualab", required = true, value = "")
  @NotNull


  public String getSystem() {
    return tankSystem;
  }

  public void setSystem(String tankSystem) {
    this.tankSystem = tankSystem;
  }

  public Log timestamp(Timestamp timestamp) {
    this.timestamp = timestamp;
    return this;
  }

  /**
   * Get timestamp
   * @return timestamp
   */
  @ApiModelProperty(example = "", required = true, value = "")
  @NotNull


  public Timestamp getTimestamp() {
    return timestamp;
  }

  public void setTimestamp(Timestamp timestamp) {
    this.timestamp = timestamp;
  }

  public Log value(Float value) {
    this.value = value;
    return this;
  }

  /**
   * Get value
   * @return value
   */
  @ApiModelProperty(example = "1.1", required = true, value = "")
  @NotNull


  public Float getValue() {
    return value;
  }

  public void setValue(Float value) {
    this.value = value;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Log sensor = (Log) o;
    return Objects.equals(this.logId, sensor.logId) &&
        Objects.equals(this.name, sensor.name) &&
        Objects.equals(this.serialNrDevice, sensor.serialNrDevice) &&
        Objects.equals(this.value, sensor.value) &&
        Objects.equals(this.unit, sensor.unit) &&
        Objects.equals(this.tank, sensor.tank) &&
        Objects.equals(this.tankSystem, sensor.tankSystem) &&
        Objects.equals(this.timestamp, sensor.timestamp);
  }

  @Override
  public int hashCode() {
    return Objects.hash(logId, name, serialNrDevice, value, unit, tank, tankSystem);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Log {\n");
    
    sb.append("    id: ").append(toIndentedString(logId)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    serialNrDevice: ").append(toIndentedString(serialNrDevice)).append("\n");
    sb.append("    deviceType: ").append(toIndentedString(value)).append("\n");
    sb.append("    unit: ").append(toIndentedString(unit)).append("\n");
    sb.append("    tank: ").append(toIndentedString(tank)).append("\n");
    sb.append("    system: ").append(toIndentedString(tankSystem)).append("\n");
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
}

