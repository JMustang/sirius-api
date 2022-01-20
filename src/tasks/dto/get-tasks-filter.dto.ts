/* eslint-disable prettier/prettier */
import { IsString, IsOptional, IsEnum } from 'class-validator';
import { TaskStatus } from '../task-status';

export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
