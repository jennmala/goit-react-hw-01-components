import PropTypes from 'prop-types';
import {
  Wrap,
  Title,
  StatList,
  Stat,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Wrap>
      {title && <Title>{title}</Title>}

      <StatList>
        <Stat>
          <Label>.docx</Label>
          <Percentage>
            {stats
              .filter(stat => stat.label === '.docx')
              .reduce((total, stat) => {
                return total + stat.percentage;
              }, 0)}
            %
          </Percentage>
        </Stat>

        <Stat>
          <Label>.pdf</Label>
          <Percentage>
            {stats
              .filter(stat => stat.label === '.pdf')
              .reduce((total, stat) => {
                return total + stat.percentage;
              }, 0)}
            %
          </Percentage>
        </Stat>

        <Stat>
          <Label>.mp3</Label>
          <Percentage>
            {stats
              .filter(stat => stat.label === '.mp3')
              .reduce((total, stat) => {
                return total + stat.percentage;
              }, 0)}
            %
          </Percentage>
        </Stat>

        <Stat>
          <Label>.psd</Label>
          <Percentage>
            {stats
              .filter(stat => stat.label === '.psd')
              .reduce((total, stat) => {
                return total + stat.percentage;
              }, 0)}
            %
          </Percentage>
        </Stat>
      </StatList>
    </Wrap>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

// {stats.map(stat => (
//     <Stat key={stat.id} numberOfStats={stats.length}>
//         <Label>{stat.label}</Label>
//         <Percentage>{stat.percentage}%</Percentage>
//     </Stat>
// ))}
